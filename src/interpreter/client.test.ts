import { describe, expect, it } from "bun:test";
import { Client } from "~/interpreter/client.ts";


describe("Client", () => {
	const client = new Client();

	it("test case 1", () => {
		const result = client.process("2 + 1 - 4 + 6");
		expect(result).toStrictEqual(2 + 1 - 4 + 6);
	});

	it("test case 2", () => {
		const result = client.process("7 + 8 - 5 - 2 - 2");
		expect(result).toStrictEqual(7 + 8 - 5 - 2 - 2);
	});

	it("Invalid input 1", () => {
		expect(() => client.process("- 7 + 8 - 5 - 2 - 2")).toThrow("Invalid input");
	});


	it("Invalid input 3", () => {
		expect(() => client.process("5- 3 + as - 11")).toThrow("Invalid numerals near + operator");
	});
});
