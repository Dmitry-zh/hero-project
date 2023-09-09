import {
  CharacteristicTypeKey,
  CharacteristicValue,
} from '../../characteristics'

export enum CharacteristicsBuffInfluence {
  Plus = 'plus',
  Minus = 'minus',
  Divide = 'divide',
  Multiply = 'multiply',
}

export interface CharacteristicsBuff {
  influenceOn: CharacteristicTypeKey
  influenceType: CharacteristicsBuffInfluence
  value: CharacteristicValue
}
