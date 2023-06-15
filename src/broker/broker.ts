import { ACTIONS, TActionValues } from "~/broker/constants.ts";
import { Subscriber } from "~/broker/subscriber.ts";


export class Broker {
	private subscribers = Object.values(ACTIONS).reduce((acc, curr) => {
		acc[curr] = [];
		return acc;
	}, {} as Record<TActionValues[number], Subscriber[]>);

	getSubscribers(action: TActionValues[number]) {
		return this.subscribers[action];
	}

	subscribe(subscriber: Subscriber, action: TActionValues[number]) {
		this.subscribers[action].push(subscriber);
	}

	unsubscribe(subscriber: Subscriber, action: TActionValues[number]) {
		this.subscribers[action] = this.subscribers[action].filter(sub => sub.name !== subscriber.name);
	}

	publish(action: TActionValues[number], message: string) {
		const subscribers = this.subscribers[action];
		subscribers.forEach((subscriber) => subscriber.sendMessage(message));
	}
}
