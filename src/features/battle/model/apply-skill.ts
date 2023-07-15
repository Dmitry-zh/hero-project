import { DamageType, DamageValue, SkillModel } from 'src/shared/model/skill'
import { CharacteristicsModel } from 'src/shared/model/characteristics'
import { rollChance } from '~/shared/model/randomizer'

const reducedDamageByDefence = (
  pureDamage: DamageValue,
  defenceRate: CharacteristicsModel['physicalDefence'],
): DamageValue => {
  if (pureDamage < defenceRate) {
    // если рейт защиты больше чем урон - то наносим 30% от урона
    // TODO: move to constants
    return pureDamage * 0.3
  }

  // каждое очко защиты снижает урон на 50% от значения
  // прим1. атака 100, защита - 25 -> цель получает урон 87.5
  // прим2. атака 10, защита 8 -> цель получает урон - 6
  // TODO: move to constants
  return pureDamage - defenceRate * 0.5
}

const calcSkillDamage = (
  skill: SkillModel,
  characteristics: CharacteristicsModel,
): DamageValue => {
  return skill.damageValue(characteristics)
}

const applySkill = (
  applierCharacteristics: CharacteristicsModel,
  skillTargetCharacteristics: CharacteristicsModel,
  skill: SkillModel,
): {
  damage: DamageValue
  payload?: {
    reason: string
  }
} => {
  if (skill.canBlock) {
    if (rollChance(skillTargetCharacteristics.blockChance)) {
      return {
        damage: 0,
        payload: { reason: 'Block!' },
      }
    }
  }

  if (skill.canAvoid) {
    if (rollChance(skillTargetCharacteristics.avoidChance)) {
      return {
        damage: 0,
        payload: { reason: 'Avoid!' },
      }
    }
  }
  // TODO: critical damage

  let damage = calcSkillDamage(skill, applierCharacteristics)
  if (skill.reducesDamageByDefenceValue) {
    damage = reducedDamageByDefence(
      damage,
      skill.damageType === DamageType.Physical
        ? skillTargetCharacteristics.physicalDefence
        : skillTargetCharacteristics.magicalDefence,
    )
  }

  return { damage }
}

export { applySkill }
