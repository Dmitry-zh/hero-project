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

export type CharacteristicValue = number;

export interface CharacteristicsModel
	extends Record<CharacteristicTypeKey, CharacteristicValue> {
	// base
	[BaseCharacteristicsKeys.HitPoints]: CharacteristicValue;
	[BaseCharacteristicsKeys.Mana]: CharacteristicValue;
	[BaseCharacteristicsKeys.PhysicalAttack]: CharacteristicValue;
	[BaseCharacteristicsKeys.MagicalAttack]: CharacteristicValue;
	[BaseCharacteristicsKeys.PhysicalDefense]: CharacteristicValue;
	[BaseCharacteristicsKeys.MagicalDefense]: CharacteristicValue;

	// characteristics
	[CharacteristicsKeys.Intelligence]: CharacteristicValue;
	[CharacteristicsKeys.Strength]: CharacteristicValue;
	[CharacteristicsKeys.Vitality]: CharacteristicValue;
	[CharacteristicsKeys.Agility]: CharacteristicValue;
	[CharacteristicsKeys.Mentality]: CharacteristicValue;

	// possibilities
	[CharacteristicsPossibilitiesKeys.BlockChance]: CharacteristicValue;
	[CharacteristicsPossibilitiesKeys.AvoidChance]: CharacteristicValue;
	[CharacteristicsPossibilitiesKeys.CriticalPhysicalAttackChance]: CharacteristicValue;
}
