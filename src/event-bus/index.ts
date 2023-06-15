import { EventBus } from "~/event-bus/event-bus.ts";
import { EventListener } from "~/event-bus/event-listener.ts";
import { EventSource } from "~/event-bus/event-source.ts";


const eventBus = new EventBus();
const eventSource = new EventSource(eventBus);
const eventTypes = ["Event Type 1", "Event Type 2"];

const el1 = new EventListener("Listener 1", (data) => console.log(`Listener 1 received data: ${data}`), eventBus, eventTypes[0]);
const el2 = new EventListener("Listener 2", (data) => console.log(`Listener 2 received data: ${data}`), eventBus, eventTypes[1]);


el1.startListening();
el2.startListening();

eventSource.emitEvent(eventTypes[0], "1");
eventSource.emitEvent(eventTypes[1], "2");

el1.stopListening();
el2.stopListening();

eventSource.emitEvent(eventTypes[1], "3");
