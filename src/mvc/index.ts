import { Controller } from "~/mvc/controller.ts";
import { Model } from "~/mvc/model.ts";
import { View } from "~/mvc/view.ts";


const model = new Model();
const controller = new Controller(model);
const view = new View(controller);

view.addSuperHero("Thor");
view.addSuperHero("Flash");
view.addSuperHero("Ironman");
view.addSuperHero("Hulk");


view.logSuperHeroes();
