import { DamageType, SkillModel } from '../types'

const weaponAttack: SkillModel = {
  id: 'weaponAttack',
  damageType: DamageType.Physical,
  reducesDamageByDefenceValue: true,
  canBlock: true,
  canAvoid: true,
  hasCriticalDamage: true,
  damageValue: (characteristics) => characteristics.physicalAttack,
  coolDownTurns: 0,
  manaCost: 0,
  iconSrc: 'icons/skills/sword.png',
}

export { weaponAttack }
