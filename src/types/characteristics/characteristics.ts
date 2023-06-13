export enum BaseCharacteristicsKeys {
	HitPoints = 'hitPoints',
	Mana = 'mana',
	PhysicalAttack = 'physicalAttack',
	MagicalAttack = 'magicalAttack',
	PhysicalDefense = 'physicalDefence',
	MagicalDefense = 'magicalDefence',
}

export enum CharacteristicsKeys {
	Intelligence = 'intelligence',
	Strength = 'strength',
	Vitality = 'vitality',
	Agility = 'agility',
	Mentality = 'mentality',
}

export enum CharacteristicsPossibilitiesKeys {
	BlockChance = 'blockChance',
	AvoidChance = 'avoidChance',
	CriticalPhysicalAttackChance = 'criticalPhysicalAttackChance',
}

export type CharacteristicTypeKey =
	| CharacteristicsKeys
	| BaseCharacteristicsKeys
	| CharacteristicsPossibilitiesKeys;

export interface CharacteristicsModel
	extends Record<CharacteristicTypeKey, number> {
	// base
	[BaseCharacteristicsKeys.HitPoints]: number;
	[BaseCharacteristicsKeys.Mana]: number;
	[BaseCharacteristicsKeys.PhysicalAttack]: number;
	[BaseCharacteristicsKeys.MagicalAttack]: number;
	[BaseCharacteristicsKeys.PhysicalDefense]: number;
	[BaseCharacteristicsKeys.MagicalDefense]: number;

	// characteristics
	[CharacteristicsKeys.Intelligence]: number;
	[CharacteristicsKeys.Strength]: number;
	[CharacteristicsKeys.Vitality]: number;
	[CharacteristicsKeys.Agility]: number;
	[CharacteristicsKeys.Mentality]: number;

	// possibilities
	[CharacteristicsPossibilitiesKeys.BlockChance]: number;
	[CharacteristicsPossibilitiesKeys.AvoidChance]: number;
	[CharacteristicsPossibilitiesKeys.CriticalPhysicalAttackChance]: number;
}
