import { Model } from "~/mvc/model.ts";


export class Controller {
	private readonly model: Model;

	constructor(model: Model) {
		this.model = model;
	}

	getData() {
		return this.model.getData();
	}

	addSuperHero(superHero: string) {
		const data = this.model.getData();
		if (!superHero) throw new Error(`Invalid input!`);
		if (data.find(({name}) => name === superHero)) throw new Error(`Superhero ${superHero} already exists!`);

		this.model.add({name: superHero});
	}
}
