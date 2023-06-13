import { Nullable } from '@/types/base';
import { EquipmentModel } from '@/types/equipment/equipment';

export enum EquipmentSlot {
	Weapon = 'weapon',
	Shield = 'shield',
	Chest = 'chest',
	Gloves = 'gloves',
	Belt = 'belt',
	Pants = 'pants',
	Shoulders = 'pants',
}
export type EquipmentSlots = Record<EquipmentSlot, Nullable<EquipmentModel>>;
