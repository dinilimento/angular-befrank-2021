import { Observable } from 'rxjs';
import { ChatEvent } from './chat-event';

export interface ChatConnection {
	states: Observable<string>;

	events: Observable<ChatEvent>;

	username: string;

	send(message: string): void;
}