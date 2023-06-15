import { EventBus } from "~/event-bus/event-bus.ts";
import { TEventHandler } from "~/event-bus/types.ts";


export class EventListener {
	private readonly eventHandler: TEventHandler;
	private readonly eventBus: EventBus;
	private readonly eventType: string;
	private readonly name: string;

	constructor(name: string, eventHandler: TEventHandler, eventBus: EventBus, eventType: string) {
		this.name = name;
		this.eventHandler = eventHandler;
		this.eventBus = eventBus;
		this.eventType = eventType;
	}

	startListening(): void {
		this.eventBus.subscribe(this.name, this.eventType, this.eventHandler);
	}

	stopListening(): void {
		this.eventBus.unsubscribe(this.name, this.eventType);
	}
}
