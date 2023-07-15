import { CharacteristicsModel } from 'src/shared/model/characteristics'
import { DamageType, SkillModel } from 'src/shared/model/skill'

const fireball: SkillModel = {
  id: 'fireball',
  damageType: DamageType.Magical,
  reducesDamageByDefenceValue: true,
  canBlock: false,
  canAvoid: true,
  hasCriticalDamage: false,
  damageValue: (characteristics: CharacteristicsModel) =>
    characteristics.magicalAttack,
  coolDownTurns: 0,
  manaCost: 5,
  iconSrc: 'icons/skills/fireball.png',
}

export { fireball }
