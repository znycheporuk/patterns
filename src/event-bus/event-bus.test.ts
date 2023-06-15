import { describe, expect, it, jest } from "bun:test";
import { EventBus } from "~/event-bus/event-bus.ts";


describe("EventBus", () => {

	it("should subscribe", async () => {
		const eventBus = new EventBus();
		const listenerName = "Test Listener";
		const eventType = "Test Event Type";
		const eventHandler = (data: string) => data;

		eventBus.subscribe(listenerName, eventType, eventHandler);

		const eventHandlers = eventBus.getEventHandlers();
		const result = eventHandlers.get(eventType)?.[listenerName];

		expect(result).toStrictEqual(eventHandler);
	});

	it("should unsubscribe", async () => {
		const eventBus = new EventBus();
		const listenerName = "Test Listener";
		const eventType = "Test Event Type";

		eventBus.subscribe(listenerName, eventType, (data) => data);
		eventBus.unsubscribe(listenerName, eventType);

		const eventHandlers = eventBus.getEventHandlers();
		const result = eventHandlers.get(eventType)?.[listenerName];

		expect(result).toBeUndefined();
	});

	it("should publish for subscribers", async () => {
		const eventBus = new EventBus();
		const listenerName = "Test Listener";
		const eventType = "Test Event Type";
		const eventData = "Test Event Data";
		const eventHandler = jest.fn((data) => data);

		eventBus.subscribe(listenerName, eventType, eventHandler);
		eventBus.publish(eventType, eventData);

		expect(eventHandler).toHaveBeenCalledTimes(1);
	});
});
