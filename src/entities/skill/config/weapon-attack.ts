import { CharacteristicsModel } from 'src/shared/model/characteristics'
import { DamageType, SkillModel } from '~/shared/model/skill'
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
  iconSrc: 'icons/skills/sword.png',
}

export { weaponAttack }
