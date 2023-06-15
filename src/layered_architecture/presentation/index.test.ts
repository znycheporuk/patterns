import { describe, expect, it, spyOn } from "bun:test";
import readline from "readline";
import { data } from "~/layered_architecture/database/data.ts";
import { PresentationLayer } from "~/layered_architecture/presentation/presentation.ts";


describe("PresentationLayer", () => {
	spyOn(readline, "createInterface").mockImplementation(() => {
		return {
			question: (text: string, callback: any) => callback(1),
		} as any;
	});

	const presentationLayer = new PresentationLayer();

	describe("getById function", () => {
		it("finds existing entity", async () => {
			spyOn(readline, "createInterface").mockImplementation(() => {
				return {
					question: (text: string, callback: any) => callback(1),
				} as any;
			});
			const result = await presentationLayer.getById();

			expect(result).toMatchObject(data[0]);
		});

		it("properly handles string input", async () => {
			const id = "string id";

			spyOn(readline, "createInterface").mockImplementation(() => {
				return {
					question: (text: string, callback: any) => callback(id),
				} as any;
			});

			const presentationLayer = new PresentationLayer();

			expect(() => presentationLayer.getById()).toBe(undefined)
		});
	});
});
