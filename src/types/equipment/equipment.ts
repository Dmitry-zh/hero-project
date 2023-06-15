import { EquipmentCharacteristicsModel } from '@/types/characteristics';
import { EquipmentAttachment } from '@/types/2d';

export interface EquipmentModel {
	characteristics: EquipmentCharacteristicsModel;
	icon: string;
	attachment: EquipmentAttachment[];
}
