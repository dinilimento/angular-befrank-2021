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
	
	// TODO: hier hoort wat bij te komen voor wat er in de ngOnDestroy() moet gebeuren


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







		// TODO: implementeer










	}

	say() {
		this.connection.send(this.messageForm.value.message);
		this.messageForm.reset();
	}

	ngOnDestroy() {
		// TODO: Wat horen we hier ook alweer te doen?




	}
}