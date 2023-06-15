import Character from '@/entities/character';
import { DEFAULT_CHARACTER_CHARACTERISTICS } from '@/constants/character';
import { BaseCharacteristicsKeys } from '@/types/characteristics';
import { DEFAULT_EQUIPMENT } from '@/constants/equipment';

const createNewCharacter = (): Character =>
	new Character({
		id: 'player',
		characteristics: DEFAULT_CHARACTER_CHARACTERISTICS,
		equipment: DEFAULT_EQUIPMENT,
		level: 1,
		experience: 0,
		gold: 10,
		currentHitPoints:
			DEFAULT_CHARACTER_CHARACTERISTICS[BaseCharacteristicsKeys.HitPoints],
		currentMana:
			DEFAULT_CHARACTER_CHARACTERISTICS[BaseCharacteristicsKeys.Mana],
	});

export { createNewCharacter };
