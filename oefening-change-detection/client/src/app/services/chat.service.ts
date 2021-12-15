import { Injectable } from '@angular/core';
import { ChatEvent } from 'src/app/models/chat-event';
import { ReplaySubject, fromEvent } from 'rxjs';
import { ChatConnection } from '../models/chat-connection';

@Injectable({ providedIn: 'root' })
export class ChatService {
	connection?: ChatConnection;
	username?: string;

	get isConnected() { return !!this.connection };

	connect(username: string): ChatConnection {
		// has a connection been made already?
		if (this.isConnected) {
			return this.connection!;
		}

		// no connection yet. create it all.
		let socket = new WebSocket('ws://localhost:1337/chat');

		let stateSubject = new ReplaySubject<string>();
		let messageSubject = new ReplaySubject<ChatEvent>();

		fromEvent(socket, 'open').subscribe(() => {
			let newUserMessage: ChatEvent = {
				type: 'user-connect',
				sender: username,
				content: undefined,
				timestamp: Date.now()
			};
			stateSubject.next('open');
			socket.send(JSON.stringify(newUserMessage));
		});
		fromEvent(socket, 'close').subscribe(() => {
			stateSubject.next('close');
		});
		fromEvent<MessageEvent>(socket, 'message').subscribe(e => {
			messageSubject.next(JSON.parse(e.data));
		});

		this.connection = {
			username: username,
			states: stateSubject,
			events: messageSubject,
			send(message: string) {
				let msgObj: ChatEvent = {
					sender: username,
					content: message,
					type: 'message',
					timestamp: Date.now()
				};
				socket.send(JSON.stringify(msgObj));
			}
		};
		return this.connection;
	}
}