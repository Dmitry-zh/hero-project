import { CharacteristicsModel } from '~/shared/characteristics';
import { DamageType, SkillModel } from '~/shared/skill';

const fireball: SkillModel = {
  id: 'fireball',
  damageType: DamageType.Magical,
  reducesDamageByDefenceValue: true,
  canBlock: false,
  canAvoid: true,
  hasCriticalDamage: false,
  damageValue: (characteristics: CharacteristicsModel) => characteristics.magicalAttack,
  coolDownTurns: 0,
  manaCost: 5
};

export { fireball };
