import { DamageType, SkillModel } from '@/types/skill/skill';
import { CharacteristicsModel } from '@/types/characteristics';

const weaponAttack: SkillModel = {
	id: 'weaponAttack',
	damageType: DamageType.Physical,
	reducesDamageByDefenceValue: true,
	canBlock: true,
	canAvoid: true,
	hasCriticalDamage: true,
	damageValue: (characteristics: CharacteristicsModel) =>
		characteristics.physicalAttack,
	coolDownTurns: 0,
	manaCost: 0,
};

export { weaponAttack };
