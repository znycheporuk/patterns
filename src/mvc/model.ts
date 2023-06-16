export class Model {
	private data = [{name: "Batman"}, {name: "Superman"}, {name: "Spiderman"}];

	getData() {
		return this.data;
	}

	add(el: {name: string}) {
		this.data.push(el);
	}
}
