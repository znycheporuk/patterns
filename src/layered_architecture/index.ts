import { PresentationLayer } from "~/layered_architecture/presentation/presentation.ts";


const presentationLayer = new PresentationLayer();
const entity = await presentationLayer.getById();
if (entity) {
	console.log("Entity with provided id was found: \n", entity);
} else {
	console.log("Entity with provided id was not found!");
}
