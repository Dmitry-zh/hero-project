import { CharacteristicsModel } from '@/types/characteristics';

export interface MobModel {
	characteristics: CharacteristicsModel;
	currentHitPoints: CharacteristicsModel['hitPoints'];
	currentMana: CharacteristicsModel['mana'];

	goldReward: number;
	experienceReward: number;
}
