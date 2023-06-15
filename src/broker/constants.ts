export const ACTIONS = {
	NEW_CHAPTER: "NEW_CHAPTER",
	TRANSLATOR_ANNOUNCEMENT: "TRANSLATOR_ANNOUNCEMENT",
	NEW_COMMENT: "NEW_COMMENT",
} as const;

type Keys = keyof typeof ACTIONS;
export type TActionValues = (typeof ACTIONS)[Keys];
export type TAction = {
	type: TActionValues[number];
	payload: string;
}

