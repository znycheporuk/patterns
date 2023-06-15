import { describe, expect, it, mock } from "bun:test";
import { EventBus } from "~/event-bus/event-bus.ts";
import { EventListener } from "~/event-bus/event-listener.ts";


describe("EventListener", () => {
	it("should call eventBus.subscribe", async () => {
		const eventBus = new EventBus();
		const listenerName = "Test Listener";
		const eventType = "Test Event Type";
		const eventHandler = (data: string) => data;
		const eventListener = new EventListener(listenerName, eventHandler, eventBus, eventType);
		
		eventBus.subscribe = mock(() => null);
		eventListener.startListening();

		expect(eventBus.subscribe).toHaveBeenCalledTimes(1);
	});

	it("should call eventBus.unsubscribe", async () => {
		const eventBus = new EventBus();

		const listenerName = "Test Listener";
		const eventType = "Test Event Type";
		const eventHandler = (data: string) => data;
		const eventListener = new EventListener(listenerName, eventHandler, eventBus, eventType);

		eventBus.unsubscribe = mock(() => null);
		eventListener.startListening();
		eventListener.stopListening();

		expect(eventBus.unsubscribe).toHaveBeenCalledTimes(1);
	});
});
