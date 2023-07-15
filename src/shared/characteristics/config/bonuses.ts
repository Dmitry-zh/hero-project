import {
  BaseCharacteristicsKeys,
  CharacteristicsBuff,
  CharacteristicsBuffInfluenceType as BonusType,
  CharacteristicsKeys,
  CharacteristicsPossibilitiesKeys
} from '../model';

const CHARACTERISTICS_BONUSES: Record<CharacteristicsKeys, CharacteristicsBuff[]> = {
  [CharacteristicsKeys.Intelligence]: [
    // интеллект увеличивает м атк
    {
      influenceOn: BaseCharacteristicsKeys.MagicalAttack,
      influenceType: BonusType.Plus,
      value: 5
    },
    // интеллект увеличивает м деф
    {
      influenceOn: BaseCharacteristicsKeys.MagicalDefense,
      influenceType: BonusType.Plus,
      value: 5
    }
  ],
  [CharacteristicsKeys.Strength]: [
    // сила увеличивает п атк
    {
      influenceOn: BaseCharacteristicsKeys.PhysicalAttack,
      influenceType: BonusType.Plus,
      value: 5
    },
    // сила увеличивает п деф
    {
      influenceOn: BaseCharacteristicsKeys.PhysicalDefense,
      influenceType: BonusType.Plus,
      value: 5
    }
  ],
  [CharacteristicsKeys.Vitality]: [
    // виталка увеличивает хп
    {
      influenceOn: BaseCharacteristicsKeys.HitPoints,
      influenceType: BonusType.Plus,
      value: 50
    }
  ],
  [CharacteristicsKeys.Mentality]: [
    // менталка увеличивает мп
    {
      influenceOn: BaseCharacteristicsKeys.Mana,
      influenceType: BonusType.Plus,
      value: 20
    }
  ],
  [CharacteristicsKeys.Agility]: [
    // ловкость увеличивает уворот
    {
      influenceOn: CharacteristicsPossibilitiesKeys.AvoidChance,
      influenceType: BonusType.Plus,
      value: 1
    },
    // ловкость увеличивает шанс крит удара
    {
      influenceOn: CharacteristicsPossibilitiesKeys.CriticalPhysicalAttackChance,
      influenceType: BonusType.Plus,
      value: 1
    }
  ]
};

export { CHARACTERISTICS_BONUSES };
