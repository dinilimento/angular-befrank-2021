import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { ChatConnection } from 'src/app/models/chat-connection';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ChatEvent } from 'src/app/models/chat-event';

@Component({
	selector: 'minichat',
	templateUrl: './minichat.component.html',
	styleUrls: ['./minichat.component.css']
})
export class MinichatComponent implements OnInit, OnDestroy {
	messages: ChatEvent[] = [];
	private connection?: ChatConnection;
	private messagesSub?: Subscription;

	constructor(private chatService: ChatService) { }

	ngOnInit() {
		// has a connection been established already?
		if (this.chatService.isConnected) {
			this.connection = this.chatService.connection!;

			// subscribe to events based on type
			this.messagesSub = this.connection.events
				.pipe(filter(x => x.type === 'message'))
				.subscribe(message => {
					this.messages.push(message);
				});
		}
	}

	ngOnDestroy() {
		// TODO: Wat horen we hier ook alweer te doen?
		this.messagesSub?.unsubscribe();
	}
}
