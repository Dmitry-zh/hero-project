/**
 * @returns random integer between 0 to 100
 */
const roll = () => Math.trunc(Math.random() * 100);

/**
 * @param percentage - percentage chance value
 * @returns Boolean - is lucky or not
 */
const rollChance = (percentage: number): boolean => {
	return percentage <= roll();
};

export { rollChance };
