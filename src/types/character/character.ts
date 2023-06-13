import { CharacteristicsModel } from '@/types/characteristics';
import { EquipmentSlots } from '@/types/equipment/slots';

export interface CharacterModel {
	characteristics: CharacteristicsModel;
	equipment: EquipmentSlots;
	level: number;
	experience: number;
	gold: number;
	currentHitPoints: CharacteristicsModel['hitPoints'];
	currentMana: CharacteristicsModel['mana'];
}
