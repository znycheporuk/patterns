import readline from "readline";
import { BusinessLogicLayer } from "~/layered_architecture/domain/business-logic.ts";


export class PresentationLayer {
	private readonly businessLogicLayer;
	private readonly readline;

	constructor() {
		this.businessLogicLayer = new BusinessLogicLayer();
		this.readline = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}

	async getById() {
		const id: string = await new Promise((resolve) => {
			this.readline.question("Please enter entity id:\n", resolve);
		});
		this.readline.close();
		
		const idNumber = parseInt(id);

		if (!idNumber) {
			throw new Error("Id must be number!");
		}

		const entity = this.businessLogicLayer.getById(idNumber);


		return entity;
	}
}
