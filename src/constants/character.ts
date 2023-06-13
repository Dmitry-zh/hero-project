import { CharacterCharacteristicsModel } from '@/types/characteristics';

const DEFAULT_CHARACTER_CHARACTERISTICS: CharacterCharacteristicsModel = {
	// base
	hitPoints: 100,
	mana: 20,
	physicalAttack: 5,
	magicalAttack: 5,
	physicalDefence: 5,
	magicalDefence: 0,

	// characteristics
	intelligence: 0,
	strength: 0,
	vitality: 0,
	agility: 0,
	mentality: 0,

	// possibilities
	blockChance: 0,
	avoidChance: 0,
	criticalPhysicalAttackChance: 0,
};

export { DEFAULT_CHARACTER_CHARACTERISTICS };
