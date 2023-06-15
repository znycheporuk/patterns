import { describe, expect, it, jest } from "bun:test";
import { IFilter } from "~/pipe-filter/filters.ts";
import { Pipe } from "~/pipe-filter/pipe.ts";


describe("Pipe", () => {

	it("should execute each filter", async () => {
		const filterFn = (data: string) => data;
		const mockedFilterFn = jest.fn(filterFn);
		const filters: IFilter[] = Array(3).fill({process: mockedFilterFn});

		const pipe = new Pipe(filters);

		const data = "test";
		const result = pipe.applyFilters(data);

		expect(result).toStrictEqual(filterFn(data));
		expect(mockedFilterFn).toHaveBeenCalledTimes(filters.length);
	});

	it("no changes on no filters", async () => {
		const pipe = new Pipe([]);

		const data = "test";
		const result = pipe.applyFilters(data);

		expect(result).toStrictEqual(data);
	});
});
