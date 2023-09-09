import cloneDeep from 'lodash/cloneDeep'

import { CharacteristicsBuff, CharacteristicsBuffInfluence } from '../types'
import {
  CharacteristicsKeys,
  CharacteristicsModel,
  CharacteristicTypeKey,
  CharacteristicValue,
} from '../../characteristics'

const applyBuff = (
  charValue: CharacteristicValue,
  buff: CharacteristicsBuff,
  amountOfCharacteristicsToBuff: CharacteristicValue,
): number => {
  const totalMultiplier = amountOfCharacteristicsToBuff * buff.value
  if (!totalMultiplier) {
    return charValue
  }

  switch (buff.influenceType) {
    case CharacteristicsBuffInfluence.Plus:
      return charValue + totalMultiplier
    case CharacteristicsBuffInfluence.Minus:
      return charValue - totalMultiplier
    case CharacteristicsBuffInfluence.Multiply:
      return charValue * totalMultiplier
    case CharacteristicsBuffInfluence.Divide:
      return charValue / totalMultiplier
  }
}

const applyBuffs = (
  characteristics: CharacteristicsModel,
  buffs: Record<CharacteristicsKeys, CharacteristicsBuff[]>,
): CharacteristicsModel => {
  const newCharacteristics = cloneDeep(characteristics)
  for (const charName in buffs) {
    const characteristicBuffs: CharacteristicsBuff[] =
      buffs[charName as CharacteristicsKeys]
    characteristicBuffs.forEach((buff) => {
      newCharacteristics[buff.influenceOn] = applyBuff(
        newCharacteristics[buff.influenceOn],
        buff,
        newCharacteristics[charName as CharacteristicTypeKey],
      )
    })
  }

  return newCharacteristics
}

export { applyBuffs }
