import { describe, expect, it } from "bun:test";
import { Subscriber } from "~/broker/subscriber.ts";


describe("Subscriber", () => {
	it("should save multiple messages", async () => {
		const sub = new Subscriber("Test subscriber");

		const message = "Some message";
		const message2 = "Another message";

		sub.sendMessage(message);
		sub.sendMessage(message2);

		const result = sub.getMessages();

		const expectedResult = [message, message2];
		expect(result.length).toEqual(expectedResult.length);
		expect(result).toStrictEqual(expectedResult);
	});
});
