import { EquipmentSlot, EquipmentSlots } from '@/types/equipment/slots';

const DEFAULT_EQUIPMENT: EquipmentSlots = {
	[EquipmentSlot.Weapon]: null,
	[EquipmentSlot.Shield]: null,
	[EquipmentSlot.Chest]: null,
	[EquipmentSlot.Gloves]: null,
	[EquipmentSlot.Belt]: null,
	[EquipmentSlot.Pants]: null,
	[EquipmentSlot.Shoulders]: null,
};

export { DEFAULT_EQUIPMENT };
