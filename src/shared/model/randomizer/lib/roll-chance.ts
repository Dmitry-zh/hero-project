import { roll } from './roll'

/**
 * @param percentage - percentage chance value
 * @returns Boolean - is lucky or not
 */
const rollChance = (percentage: number): boolean => {
  return percentage >= roll()
}

export { rollChance }
