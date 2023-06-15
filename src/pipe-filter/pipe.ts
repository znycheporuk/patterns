import { IFilter } from "~/pipe-filter/filters.ts";


export class Pipe {
  private readonly filters: IFilter[] = [];

  constructor(filters: IFilter[]) {
    this.filters = filters;
  }

  applyFilters(data: string): string {
    return this.filters.reduce((acc, next) => next.process(acc), data);
  }
}
