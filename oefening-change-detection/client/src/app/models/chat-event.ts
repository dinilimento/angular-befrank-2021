export interface ChatEvent {
	type: 'announcement' | 'message' | 'user-connect' | 'user-disconnect';

	sender: string;

	content?: string;

	timestamp: number;
}