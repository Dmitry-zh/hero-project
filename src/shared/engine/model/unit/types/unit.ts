import cloneDeep from 'lodash/cloneDeep'

import { weaponAttack, SkillModel } from '../../skill'
import { CharacteristicsModel } from '../../characteristics'

export abstract class UnitModel {
  protected constructor(characteristics: CharacteristicsModel, _id: string) {
    this._id = _id
    this._characteristics = cloneDeep(characteristics)
    this._currentHitPoints = characteristics.hitPoints
    this._currentMana = characteristics.mana
    this.skills = [weaponAttack]
  }

  public get characteristics(): CharacteristicsModel {
    return this._characteristics
  }

  public get currentHitPoints(): CharacteristicsModel['hitPoints'] {
    return this._currentHitPoints
  }

  public set currentHitPoints(hitPoints: CharacteristicsModel['hitPoints']) {
    this._currentHitPoints = hitPoints
  }

  public get currentMana(): CharacteristicsModel['mana'] {
    return this._currentMana
  }

  public set currentMana(mana: CharacteristicsModel['mana']) {
    this.currentMana = mana
  }

  private readonly _id: string
  protected _characteristics: CharacteristicsModel
  protected _currentHitPoints: CharacteristicsModel['hitPoints']
  protected _currentMana: CharacteristicsModel['hitPoints']
  public skills: SkillModel[]
}
