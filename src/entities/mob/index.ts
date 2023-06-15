import cloneDeep from 'lodash/cloneDeep';

import { MobModel } from '@/types/mob';
import { CharacteristicsModel } from '@/types/characteristics';

export class Mob implements MobModel {
	constructor(
		characteristics: CharacteristicsModel,
		{
			goldReward,
			experienceReward,
		}: {
			goldReward: MobModel['goldReward'];
			experienceReward: MobModel['experienceReward'];
		}
	) {
		this.characteristics = cloneDeep(characteristics);
		this.currentHitPoints = characteristics.hitPoints;
		this.currentMana = characteristics.mana;
		this.experienceReward = experienceReward;
		this.goldReward = goldReward;
	}

	characteristics: CharacteristicsModel;
	currentHitPoints: CharacteristicsModel['hitPoints'];
	currentMana: CharacteristicsModel['mana'];

	goldReward: number;
	experienceReward: number;
}
