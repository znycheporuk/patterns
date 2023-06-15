import { describe, expect, it } from "bun:test";
import { Broker } from "~/broker/broker.ts";
import { ACTIONS } from "~/broker/constants.ts";
import { Subscriber } from "~/broker/subscriber.ts";


describe("Broker", () => {
	it("should save subscribers for action", async () => {
		const broker = new Broker();

		const sub1 = new Subscriber("Sub 1");
		const sub2 = new Subscriber("Sub 2");

		const action = ACTIONS.NEW_CHAPTER;

		broker.subscribe(sub1, action);
		broker.subscribe(sub2, action);

		const result = broker.getSubscribers(action);

		const expectedResult = [sub1, sub2];

		expect(result.length).toStrictEqual(expectedResult.length);
		expect(result).toStrictEqual(expectedResult);
	});

	it("should remove subscribers from action", async () => {
		const broker = new Broker();

		const sub1 = new Subscriber("Sub 1");
		const sub2 = new Subscriber("Sub 2");

		const action = ACTIONS.NEW_COMMENT;

		broker.subscribe(sub1, action);
		broker.subscribe(sub2, action);

		broker.unsubscribe(sub1, action);

		const result = broker.getSubscribers(action);

		const expectedResult = [sub2];

		expect(result.length).toStrictEqual(expectedResult.length);
		expect(result).toStrictEqual(expectedResult);
	});

	it("should publish messages", async () => {
		const broker = new Broker();

		const sub1 = new Subscriber("Sub 1");
		const sub2 = new Subscriber("Sub 2");

		const action = ACTIONS.NEW_COMMENT;
		const action2 = ACTIONS.NEW_CHAPTER;

		broker.subscribe(sub1, action);
		broker.subscribe(sub2, action2);

		const announcement = "New chapter announcement";

		broker.publish(action, announcement);

		const result1 = sub1.getMessages();
		const result2 = sub2.getMessages();

		const expectedResult = [announcement];

		expect(result1.length).toStrictEqual(expectedResult.length);
		expect(result1).toStrictEqual(expectedResult);
		expect(result2.length).toStrictEqual(0);
		expect(result2).toStrictEqual([]);
	});
});
