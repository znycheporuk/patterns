import { DatabaseLayer } from "~/layered_architecture/database/database.ts";


export class BusinessLogicLayer {
	private databaseLayer: DatabaseLayer;

	constructor() {
		this.databaseLayer = new DatabaseLayer();
	}

	getById(id: number) {
		const res = this.databaseLayer.getDataById(id);

		return res;
	}
}
