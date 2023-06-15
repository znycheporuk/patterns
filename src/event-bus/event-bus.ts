import { TEventHandler } from "~/event-bus/types.ts";


export class EventBus {
	private eventHandlers = new Map<string, Record<string, TEventHandler>>();

	subscribe(listenerName: string, eventType: string, eventHandler: TEventHandler) {
		if (!this.eventHandlers.has(eventType)) {
			this.eventHandlers.set(eventType, {});
		}

		this.eventHandlers.get(eventType)![listenerName] = eventHandler;
	}

	unsubscribe(listenerName: string, eventType: string) {
		if (this.eventHandlers.has(eventType)) {
			delete this.eventHandlers.get(eventType)![listenerName];
		}
	}


	publish(eventType: string, eventData: string) {
		const eventsOfType = this.eventHandlers.get(eventType);
		if (eventsOfType) Object.values(eventsOfType).forEach(value => value?.(eventData));
	}

	getEventHandlers() {
		return this.eventHandlers;
	}
}
