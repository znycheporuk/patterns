import { describe, expect, it } from "bun:test";
import { EventBus } from "~/event-bus/event-bus.ts";
import { EventSource } from "~/event-bus/event-source.ts";


describe("EventSource", () => {
	it("should call eventBus.publish", async () => {
		const eventBus = new EventBus();
		const eventSource = new EventSource(eventBus);
		const eventType = "Test Event Type";
		const eventData = "Test Event Data";
		eventSource.emitEvent(eventType, eventData);
		expect(eventBus.publish).toHaveBeenCalledTimes(1);
	});
});
