import { PointsBar } from '~/entities/unit/ui/PointsBar';
import { UnitModel } from '~/entities/unit';
import { SkillTile } from '~/entities/skill';
import { SkillModel } from '~/shared/skill';

interface Props {
  fighter: UnitModel;
  onSkillApplied?: (skill: SkillModel) => void;
}
function FighterTile({ fighter, onSkillApplied }: Props) {
  return (
    <div>
      <PointsBar
        current={fighter.currentHitPoints}
        max={fighter.characteristics.hitPoints}
        color="red"
      />
      <div></div>
      <div>
        {fighter.skills.map((skill) => (
          <SkillTile key={skill.id} skill={skill} onApplied={onSkillApplied} />
        ))}
      </div>
    </div>
  );
}

export { FighterTile };
