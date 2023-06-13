import { CharacterModel } from '@/types/character';
import { CharacteristicsModel } from '@/types/characteristics';
import { EquipmentSlots } from '@/types/equipment/slots';
import { calcWithBuffs } from '@/tools/characteristics';
import { CHARACTERISTICS_BONUSES } from '@/constants/characteristics';

class Character implements CharacterModel {
	constructor({
		characteristics,
		equipment,
		level,
		experience,
		gold,
		currentHitPoints,
		currentMana,
	}: CharacterModel) {
		this._characteristics = characteristics;
		this.equipment = equipment;
		this.level = level;
		this.experience = experience;
		this.gold = gold;
		this.currentHitPoints = currentHitPoints;
		this.currentMana = currentMana;
	}

	get characteristics(): CharacteristicsModel {
		const withSelfCharsBonuses = calcWithBuffs(
			this._characteristics,
			CHARACTERISTICS_BONUSES
		);

		return withSelfCharsBonuses;
	}

	_characteristics: CharacteristicsModel;
	equipment: EquipmentSlots;
	level: number;
	experience: number;
	gold: number;
	currentHitPoints: CharacteristicsModel['hitPoints'];
	currentMana: CharacteristicsModel['mana'];
}

export default Character;
