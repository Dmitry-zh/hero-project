import { SkillModel } from '~/shared/skill';

type Props = {
  skill: SkillModel;
  onApplied?: (skill: SkillModel) => void;
};

function SkillTile({ skill, onApplied }: Props) {
  return (
    <div onClick={() => onApplied?.(skill)}>
      <div>{skill.id}</div>
    </div>
  );
}

export { SkillTile };
