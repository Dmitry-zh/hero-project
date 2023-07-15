import { EquipmentSlot } from '~/shared/equipment/model/equipment-slot';
import { Nullable } from '~/shared/nullable';

import { EquipmentModel } from './equipment';

export type EquipmentSlots = Record<EquipmentSlot, Nullable<EquipmentModel>>;
export type { EquipmentModel };
export { EquipmentSlot };
