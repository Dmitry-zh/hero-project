import { DamageType, SkillModel } from '../types'

const fireball: SkillModel = {
  id: 'fireball',
  damageType: DamageType.Magical,
  reducesDamageByDefenceValue: true,
  canBlock: false,
  canAvoid: true,
  hasCriticalDamage: false,
  damageValue: (characteristics) => characteristics.magicalAttack,
  coolDownTurns: 0,
  manaCost: 5,
  iconSrc: 'icons/skills/fireball.png',
}

export { fireball }
