import { EventBus } from "~/event-bus/event-bus.ts";


export class EventSource {
	private readonly eventBus: EventBus;

	constructor(eventBus: EventBus) {
		this.eventBus = eventBus;
	}

	emitEvent(eventType: string, data: string): void {
		this.eventBus.publish(eventType, data);
	}
}
