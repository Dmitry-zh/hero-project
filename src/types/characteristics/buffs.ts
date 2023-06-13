import { CharacteristicTypeKey } from '@/types/characteristics/characteristics';

export enum CharacteristicsBuffInfluenceType {
	Plus = 'plus',
	Minus = 'minus',
	Divide = 'divide',
	Multiply = 'multiply',
}

export interface CharacteristicsBuff {
	influenceOn: CharacteristicTypeKey;
	influenceType: CharacteristicsBuffInfluenceType;
	// TODO: возможно тут будет другое значение
	value: number;
}
