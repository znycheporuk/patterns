import { Broker } from "~/broker/broker.ts";
import { ACTIONS, TAction } from "~/broker/constants.ts";
import { Subscriber } from "~/broker/subscriber.ts";


const broker = new Broker();

const sub1 = new Subscriber("Sub 1");
const sub2 = new Subscriber("Sub 2");


broker.subscribe(sub1, ACTIONS.NEW_CHAPTER);
broker.subscribe(sub1, ACTIONS.TRANSLATOR_ANNOUNCEMENT);
broker.subscribe(sub1, ACTIONS.NEW_COMMENT);
broker.subscribe(sub2, ACTIONS.NEW_CHAPTER);
broker.subscribe(sub2, ACTIONS.TRANSLATOR_ANNOUNCEMENT);

publishActions([
	{type: ACTIONS.NEW_CHAPTER, payload: "The new chapter is here!"},
	{type: ACTIONS.NEW_CHAPTER, payload: "Another new chapter is here!"},
	{type: ACTIONS.TRANSLATOR_ANNOUNCEMENT, payload: "New release schedule: 10 chapters per week!"},
	{type: ACTIONS.NEW_COMMENT, payload: "I love this novel!"},
	{type: ACTIONS.NEW_COMMENT, payload: "Wonder, how plot will develop"},
]);

console.log("Sub1 messages: ", sub1.getMessages());
console.log("Sub2 messages: ", sub2.getMessages());

broker.unsubscribe(sub1, ACTIONS.NEW_COMMENT);

publishActions([
	{type: ACTIONS.NEW_CHAPTER, payload: "New chapter is here!"},
	{type: ACTIONS.NEW_COMMENT, payload: "Main character is so cool!"},
]);


console.log("Sub1 messages: ", sub1.getMessages());
console.log("Sub2 messages: ", sub2.getMessages());


function publishActions(actions: TAction[]) {
	actions.forEach(({type, payload}) => {
		broker.publish(type, payload);
	});
}
