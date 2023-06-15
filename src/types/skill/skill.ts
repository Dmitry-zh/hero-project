import { CharacteristicsModel } from '@/types/characteristics';

export enum DamageType {
	Magical = 'magical',
	Physical = 'physical',
}

export type DamageValue = number;

export type DamageCalcCallback = (
	characteristics: CharacteristicsModel
) => DamageValue;

export interface SkillModel {
	id: string;
	// тип урона
	damageType: DamageType;
	// снижается ли урон в зависимости от показателя защиты?
	reducesDamageByDefenceValue: boolean;
	// может ли заблокироваться?
	canBlock: boolean;
	// может улониться?
	canAvoid: boolean;
	// может ли нанести крит урон?
	hasCriticalDamage: boolean;
	// откуда брать значение для урона
	damageValue: DamageCalcCallback;
	// кол-во ходов для повторного использования
	coolDownTurns: number;
	// затраты маны
	manaCost: CharacteristicsModel['mana'];
}
