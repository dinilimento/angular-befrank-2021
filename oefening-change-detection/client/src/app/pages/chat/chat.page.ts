import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatEvent } from 'src/app/models/chat-event';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatConnection } from 'src/app/models/chat-connection';
import { filter, map } from 'rxjs/operators';
import { ChatUser } from 'src/app/models/chat-user';

@Component({
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
	messages: ChatEvent[] = [];
	announcements: ChatEvent[] = [];
	users: ChatUser[] = [];
	connectForm!: FormGroup;
	messageForm!: FormGroup;
	private connection!: ChatConnection;
	connected = false;
	username?: string;
	private statesSub?: Subscription;
	private messagesSub?: Subscription;
	private announcementsSub?: Subscription;
	private userConnectsSub?: Subscription;
	private userDisconnectsSub?: Subscription;

	constructor(
		private fb: FormBuilder,
		private chatService: ChatService) { }

	ngOnInit() {
		// set up forms
		this.connectForm = this.fb.group({
			name: [, Validators.required]
		});
		this.messageForm = this.fb.group({
			message: [, Validators.required]
		});

		// has a connection been established already?
		if (this.chatService.isConnected) {
			this.connection = this.chatService.connection!;
			this.initializeChat();
		}
	}

	connect() {
		// connect to socket
		this.connection = this.chatService.connect(this.connectForm.value.name);
		this.initializeChat();
	}

	initializeChat() {
		this.username = this.connection.username;
		
		this.statesSub = this.connection.states.subscribe(state => this.connected = state === 'open');

		// subscribe to events based on type
		this.messagesSub = this.connection.events
			.pipe(filter(x => x.type === 'message'))
			.subscribe(message => {
				this.messages.push(message);
			});

		this.announcementsSub = this.connection.events
			.pipe(filter(x => x.type === 'announcement'))
			.subscribe(announcement => {
				this.announcements.push(announcement);
			});

		this.userConnectsSub = this.connection.events
			.pipe(filter(x => x.type === 'user-connect'))
			.pipe(map(x => ({ name: x.sender } as ChatUser)))
			.subscribe(user => {
				this.users.push(user);
			});

		this.userDisconnectsSub = this.connection.events
			.pipe(filter(x => x.type === 'user-disconnect'))
			.pipe(map(x => { return { name: x.sender } as ChatUser }))
			.subscribe(user => {
				this.users = this.users.filter(x => x.name !== user.name);
			});
	}

	say() {
		this.connection.send(this.messageForm.value.message);
		this.messageForm.reset();
	}

	ngOnDestroy() {
		this.statesSub?.unsubscribe();
		this.messagesSub?.unsubscribe();
		this.announcementsSub?.unsubscribe();
		this.userConnectsSub?.unsubscribe();
		this.userDisconnectsSub?.unsubscribe();
	}
}