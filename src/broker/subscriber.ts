export class Subscriber {
	readonly name: string;
	private messages: string[] = [];

	constructor(name: string) {
		this.name = name;
	}

	sendMessage(message: string) {
		this.messages.push(message);
	}

	getMessages(): string[] {
		return this.messages;
	}
}
