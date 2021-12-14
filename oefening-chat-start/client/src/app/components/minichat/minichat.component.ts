import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatConnection } from 'src/app/models/chat-connection';
import { Subscription } from 'rxjs';
import { ChatEvent } from 'src/app/models/chat-event';

@Component({
	selector: 'minichat',
	templateUrl: './minichat.component.html',
	styleUrls: ['./minichat.component.css']
})
export class MinichatComponent implements OnInit, OnDestroy {
	messages: ChatEvent[] = [];
	private connection?: ChatConnection;
	
	// TODO: hier hoort wat bij te komen voor wat er in de ngOnDestroy() moet gebeuren



	constructor(private chatService: ChatService) { }

	ngOnInit() {
		// has a connection been established already?
		if (this.chatService.isConnected) {


			// TODO: implementeer


		}
	}

	ngOnDestroy() {
		// TODO: Wat horen we hier ook alweer te doen?

	}
}
