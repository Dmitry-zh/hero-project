import { CharacteristicTypeKey, CharacteristicValue } from './base';

export enum CharacteristicsBuffInfluenceType {
  Plus = 'plus',
  Minus = 'minus',
  Divide = 'divide',
  Multiply = 'multiply'
}

export interface CharacteristicsBuff {
  influenceOn: CharacteristicTypeKey;
  influenceType: CharacteristicsBuffInfluenceType;
  value: CharacteristicValue;
}
