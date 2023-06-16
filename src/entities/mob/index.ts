import { MobModel } from '@/types/mob';
import { CharacteristicsModel } from '@/types/characteristics';
import { BaseCharacter } from '@/entities/character/base-character';
import { SkillModel } from '@/types/skill/skill';
import { weaponAttack } from '@/entities/skill/weapon-attack';

export class Mob extends BaseCharacter implements MobModel {
	constructor(
		id: string,
		characteristics: CharacteristicsModel,
		skills: SkillModel[] = [],
		{
			goldReward,
			experienceReward,
		}: {
			goldReward: MobModel['goldReward'];
			experienceReward: MobModel['experienceReward'];
		}
	) {
		super(characteristics, id);
		this.skills = [weaponAttack];
		this.id = id;
		this.experienceReward = experienceReward;
		this.goldReward = goldReward;
		if (skills && skills.length > 0) {
			this.skills = this.skills.concat(skills);
		}
	}

	id: string;
	goldReward: number;
	experienceReward: number;
}
