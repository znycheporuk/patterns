import { data } from "~/layered_architecture/database/data";


export class DatabaseLayer {
	private readonly data = data;

	getData() {
		return this.data;
	}

	getDataById(id: number) {
		return this.data.find((i) => i.id === id);
	}
}
