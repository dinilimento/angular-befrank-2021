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



		// TODO: open hier de websocketverbinding en verwerk binnenkomende berichten naar een observable stream






		return this.connection;
	}
}