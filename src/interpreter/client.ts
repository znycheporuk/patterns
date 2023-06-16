import { Context } from "~/interpreter/context.ts";
import { AbstractExpression, AddExpression, NumeralExpression, SubtractExpression } from "~/interpreter/expressions.ts";


interface Operation {
	operator: string;
	index: number;
	expression: typeof AddExpression | typeof SubtractExpression;
}

export class Client {
	process(input: string) {
		let tree: AbstractExpression[] = [];
		const context = new Context(input);

		const {operations, tokens} = this.transformInput(input);

		for (const {operator, index, expression} of operations) {
			const [leftStr, rightStr] = [tokens?.[index - 1], tokens?.[index + 1]];

			if (!leftStr || !rightStr || !parseInt(leftStr) || !parseInt(rightStr)) {
				throw new Error(`Invalid numerals near ${operator} operator`);
			}

			const leftExpression = !tree.length ? new NumeralExpression(parseInt(leftStr)) : tree[tree.length - 1];

			tree.push(new expression(leftExpression, new NumeralExpression(parseInt(rightStr))));
		}

		return tree[tree.length - 1].interpret(context);
	}

	private transformInput(input: string) {
		const arithmeticOperators = [
			{operator: "+", expression: AddExpression},
			{operator: "-", expression: SubtractExpression},
		];

		const tokens = input.split(" ");

		const operations = tokens.reduce((acc, token, index) => {
			const operation = arithmeticOperators.find((el) => el.operator === token);
			if (operation) acc.push({operator: token, index, expression: operation.expression});
			return acc;
		}, [] as Operation[]);

		const numeralTokens = tokens.filter((token) => parseInt(token));

		if (operations.length + 1 !== numeralTokens.length) throw new Error("Invalid input");

		return {operations, tokens};
	}
}
