export class Blackboard {
	private data: string[] = [];

	addData(newData: string) {
		this.data.push(newData);
	}

	getData() {
		return this.data.join(", ");
	}
}
