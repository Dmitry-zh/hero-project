import { Mob } from '@/entities/mob';

const ratMob = (): Mob =>
	new Mob(
		'rat',
		{
			hitPoints: 35,
			mana: 0,
			physicalAttack: 5,
			magicalAttack: 0,
			physicalDefence: 3,
			magicalDefence: 1,
			intelligence: 0,
			strength: 0,
			vitality: 0,
			agility: 0,
			mentality: 0,
			blockChance: 5,
			avoidChance: 5,
			criticalPhysicalAttackChance: 0,
		},
		[],
		{
			goldReward: 2,
			experienceReward: 5,
		}
	);

export { ratMob };
