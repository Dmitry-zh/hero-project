import { ItemModel } from '../../item'

export type InventoryModel = {
  items: ItemModel[]
  capacity: number
}
