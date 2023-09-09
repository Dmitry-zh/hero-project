import styled from 'styled-components'

export const BattlegroundContainer = styled.div<{ src: string }>`
  ${({ src }) => `
	background: url("${src}") no-repeat center center fixed;
	`};
  background-size: cover;
  flex: 1;
  padding: 8px;
`

export const PointBarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  gap: 24px;
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
`
