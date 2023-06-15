import { describe, expect, it } from "bun:test";
import { BlackListFilter, TrimFilter } from "~/pipe-filter/filters.ts";


describe("TrimFilter", () => {

	it("should trim data", async () => {
		const filter = new TrimFilter();
		const data = "  test  ";
		const result = filter.process(data);

		expect(result).toStrictEqual(data.trim());
	});
});


describe("BlackListFilter", () => {

	it("should replace words from black list", async () => {
		const filter = new BlackListFilter();
		const data = "Puckman operated by Alina Gingertail ate all the dots but one.";
		const expectedResult = "****man operated by Alina ******tail ate all the dots but one.";
		const result = filter.process(data);

		expect(result).toStrictEqual(expectedResult);
	});
});
