import { Nullable } from 'src/shared/model/nullable'

import { EquipmentSlot } from './equipment-slot'
import { EquipmentModel } from './equipment'

export type EquipmentSlots = Record<EquipmentSlot, Nullable<EquipmentModel>>
export type { EquipmentModel }
export { EquipmentSlot }
