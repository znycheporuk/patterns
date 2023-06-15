import { describe, expect, it } from "bun:test";
import { data } from "~/layered_architecture/database/data.ts";
import { DatabaseLayer } from "~/layered_architecture/database/database.ts";


describe("DatabaseLayer", () => {
	const databaseLayer = new DatabaseLayer();

	describe("getData function", () => {
		it("returns requested data", () => {
			const result = databaseLayer.getData();

			expect(result).toHaveLength(data.length);
			expect(result[0]).toMatchObject(data[0]);
		});
	});
});
