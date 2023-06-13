export interface CharacteristicsModel {
	// base
	hitPoints: number;
	mana: number;
	physicalAttack: number;
	magicalAttack: number;
	physicalDefence: number;
	magicalDefence: number;

	// characteristics
	intelligence: number;
	strength: number;
	vitality: number;
	agility: number;
	mentality: number;

	// possibilities
	blockChance: number;
	avoidChance: number;
	criticalPhysicalAttackChance: number;
}
