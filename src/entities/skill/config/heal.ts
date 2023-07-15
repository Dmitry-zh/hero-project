import { CharacteristicsModel } from 'src/shared/model/characteristics'
import { DamageType, SkillModel } from 'src/shared/model/skill'

const heal: SkillModel = {
  id: 'heal',
  damageType: DamageType.Magical,
  reducesDamageByDefenceValue: false,
  canBlock: false,
  canAvoid: false,
  hasCriticalDamage: false,
  // минус чтобы нанести отрицательный урон
  damageValue: (characteristics: CharacteristicsModel) =>
    -characteristics.magicalAttack,
  coolDownTurns: 2,
  manaCost: 10,
  iconSrc: 'icons/skills/healing.png',
}

export { heal }
