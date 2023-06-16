import { CharacterModel } from '@/types/character';
import { CharacteristicsModel } from '@/types/characteristics';
import { EquipmentSlots } from '@/types/equipment/slots';
import { calcWithBuffs } from '@/tools/characteristics';
import { CHARACTERISTICS_BONUSES } from '@/constants/characteristics';
import { weaponAttack } from '@/entities/skill/weapon-attack';
import { BaseCharacter } from '@/entities/character/base-character';
import { Mob } from '@/entities/mob';

class Character extends BaseCharacter implements CharacterModel {
	constructor({
		id,
		characteristics,
		equipment,
		level,
		experience,
		gold,
	}: CharacterModel) {
		super(characteristics, id);
		this.id = id;
		this.equipment = equipment;
		this.level = level;
		this.experience = experience;
		this.gold = gold;
		this.skills = [weaponAttack];
	}

	public get characteristics(): CharacteristicsModel {
		const withSelfCharsBonuses = calcWithBuffs(
			this._characteristics,
			CHARACTERISTICS_BONUSES
		);

		return withSelfCharsBonuses;
	}

	protected _getReward(slayedCharacter: Mob): BaseCharacter {
		const reward = super._getReward(slayedCharacter) as Mob;
		this.experience += reward.experienceReward;
		this.gold += reward.goldReward;

		return reward;
	}

	id: string;
	equipment: EquipmentSlots;
	level: number;
	experience: number;
	gold: number;
}

export default Character;
