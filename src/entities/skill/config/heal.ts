import { CharacteristicsModel } from '~/shared/characteristics';
import { DamageType, SkillModel } from '~/shared/skill';

const heal: SkillModel = {
  id: 'heal',
  damageType: DamageType.Magical,
  reducesDamageByDefenceValue: false,
  canBlock: false,
  canAvoid: false,
  hasCriticalDamage: false,
  // минус чтобы нанести отрицательный урон
  damageValue: (characteristics: CharacteristicsModel) => -characteristics.magicalAttack,
  coolDownTurns: 2,
  manaCost: 10
};

export { heal };
