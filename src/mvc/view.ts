import { Controller } from "~/mvc/controller.ts";


export class View {
	private controller: Controller;

	constructor(controller: Controller) {
		this.controller = controller;
	}

	logSuperHeroes() {
		const data = this.controller.getData();

		console.log(`Current alter egos: ${data.map((el) => el.name).join(", ")}`);
	}

	addSuperHero(superhero: string) {
		this.controller.addSuperHero(superhero);
	}
}
