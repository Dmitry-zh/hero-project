import { CharacterModel } from '@/types/character';
import { CharacteristicsModel } from '@/types/characteristics';
import { EquipmentSlots } from '@/types/equipment/slots';
import { calcWithBuffs } from '@/tools/characteristics';
import { CHARACTERISTICS_BONUSES } from '@/constants/characteristics';
import { SkillModel } from '@/types/skill/skill';
import { weaponAttack } from '@/entities/skill/weapon-attack';
import { calcDamage } from '@/features/battle';
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

	public useSkill(skill: SkillModel, target: Mob | Character) {
		const { damage, payload } = calcDamage(
			this.characteristics,
			skill,
			target.characteristics
		);
		target.getDamage(damage, this);
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
	skills: SkillModel[];
}

export default Character;
