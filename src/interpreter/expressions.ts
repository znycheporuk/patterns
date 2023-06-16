import { Context } from "~/interpreter/context.ts";


export abstract class AbstractExpression {
	abstract interpret(context?: Context): number;
}


export class SubtractExpression implements AbstractExpression {
	private readonly left: AbstractExpression;
	private readonly right: AbstractExpression;

	constructor(left: AbstractExpression, right: AbstractExpression) {
		this.left = left;
		this.right = right;
	}

	interpret(context: Context): number {
		return this.left.interpret(context) - this.right.interpret(context);
	}
}


export class NumeralExpression implements AbstractExpression {
	private readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	interpret(): number {
		return this.value;
	}
}


export class AddExpression implements AbstractExpression {
	private readonly left: AbstractExpression;
	private readonly right: AbstractExpression;

	constructor(left: AbstractExpression, right: AbstractExpression) {
		this.left = left;
		this.right = right;
	}

	interpret(context?: Context): number {
		return this.left.interpret(context) + this.right.interpret(context);
	}
}
