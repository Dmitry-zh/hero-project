import { CharacteristicsModel } from '@/types/characteristics';
import cloneDeep from 'lodash/cloneDeep';
import { DamageValue } from '@/types/skill/skill';

export abstract class BaseCharacter {
	protected constructor(characteristics: CharacteristicsModel, _id: string) {
		this._id = _id;
		this._characteristics = cloneDeep(characteristics);
		this._currentHitPoints = characteristics.hitPoints;
		this.currentMana = characteristics.mana;
		this._enemies = [];
	}

	public get characteristics(): CharacteristicsModel {
		return this._characteristics;
	}

	public get currentHitPoints(): CharacteristicsModel['hitPoints'] {
		return this._currentHitPoints;
	}

	public set currentHitPoints(hitPoints: CharacteristicsModel['hitPoints']) {
		this._currentHitPoints = hitPoints;
	}

	private setEnemy(enemy: BaseCharacter): void {
		if (!this._enemies.map(({ _id }) => _id).includes(enemy._id)) {
			this._enemies.push(enemy);
		}
	}

	public getDamage(damage: DamageValue, enemy: BaseCharacter): void {
		this.currentHitPoints -= damage;
		this.setEnemy(enemy);
		this._processDeath();
	}

	private _processDeath(): void {
		if (this.currentHitPoints <= 0) {
			this._onDeath();
		}
	}

	// TODO: описать логику и заменить any
	protected _getReward(slayedCharacter: BaseCharacter): BaseCharacter {
		return slayedCharacter;
	}

	private _onDeath(): void {
		this._enemies.forEach((enemy) => enemy._getReward(this));
	}

	private readonly _id: string;
	protected _characteristics: CharacteristicsModel;
	protected _currentHitPoints: CharacteristicsModel['hitPoints'];
	private _enemies: BaseCharacter[];
	public currentMana: CharacteristicsModel['mana'];
}
