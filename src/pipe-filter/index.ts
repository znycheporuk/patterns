import { BlackListFilter, TrimFilter } from "~/pipe-filter/filters.ts";
import { Pipe } from "~/pipe-filter/pipe.ts";


const pipe = new Pipe([new TrimFilter(), new BlackListFilter()]);

const data = "  Puckman operated by Alina Gingertail ate all the dots but one. ";

const res = pipe.applyFilters(data);

console.log(res);


