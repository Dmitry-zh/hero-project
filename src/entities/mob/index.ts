import { MobModel } from '@/types/mob';
import { CharacteristicsModel } from '@/types/characteristics';
import { BaseCharacter } from '@/entities/character/base-character';

export class Mob extends BaseCharacter implements MobModel {
	constructor(
		id: string,
		characteristics: CharacteristicsModel,
		{
			goldReward,
			experienceReward,
		}: {
			goldReward: MobModel['goldReward'];
			experienceReward: MobModel['experienceReward'];
		}
	) {
		super(characteristics, id);
		this.id = id;
		this.experienceReward = experienceReward;
		this.goldReward = goldReward;
	}

	id: string;
	goldReward: number;
	experienceReward: number;
}
