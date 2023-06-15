export interface IFilter {
	process(data: string): string;
}


export class BlackListFilter implements IFilter {
	private readonly blackList = ["Puck", "Ginger"];

	process(data: string): string {
		return this.blackList.reduce((acc, next) => acc.split(next).join(Array(next.length).fill("*").join("")), data);
	}
}

export class TrimFilter implements IFilter {
	process(data: string): string {
		return data.trim();
	}
}
