import { describe, expect, it } from "bun:test";
import { Model } from "~/mvc/model.ts";


describe("Model", () => {

	it("should return data", () => {
		const model = new Model();
		const result = model.getData();

		expect(result).toStrictEqual(model["data"]);
	});

	it("should add data", () => {
		const model = new Model();
		const newItem = {name: "name"};
		const expectedLength = [...model["data"]].length + 1;

		model.add(newItem);

		const data = model.getData();

		expect(data.length).toStrictEqual(expectedLength);
		expect(data.at(-1)).toStrictEqual(newItem);
	});
});
