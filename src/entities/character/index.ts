import cloneDeep from 'lodash/cloneDeep';

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
	}: CharacterModel) {
		this._characteristics = cloneDeep(characteristics);
		this.equipment = equipment;
		this.level = level;
		this.experience = experience;
		this.gold = gold;
		this.currentHitPoints = characteristics.hitPoints;
		this.currentMana = characteristics.mana;
	}

	get characteristics(): CharacteristicsModel {
		const withSelfCharsBonuses = calcWithBuffs(
			this._characteristics,
			CHARACTERISTICS_BONUSES
		);

		return withSelfCharsBonuses;
	}

	protected _characteristics: CharacteristicsModel;
	equipment: EquipmentSlots;
	level: number;
	experience: number;
	gold: number;
	currentHitPoints: CharacteristicsModel['hitPoints'];
	currentMana: CharacteristicsModel['mana'];
}

export default Character;
