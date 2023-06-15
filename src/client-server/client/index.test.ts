import { describe, expect, it, mock } from "bun:test";
import { Client } from "~/client-server/client/index.ts";


describe("server", () => {
	const mockedTextFromServer = "text from server";
	// @ts-ignore
	fetch = mock(async () => ({text: async () => mockedTextFromServer}));

	const client = new Client(8000);

	describe("connectToServer", () => {
		it("should connect to server", async () => {
			const data = await client.connectToServer();
			console.log(data);
			expect(data).toBe(mockedTextFromServer);
		});
	});
});
