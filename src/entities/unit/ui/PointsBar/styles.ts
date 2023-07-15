import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: gray;
  border: 1px solid black;
  border-radius: 4px;
`;

interface OverlayProps {
  $color: CSSStyleDeclaration['backgroundColor'];
  $percentage: number;
}

export const CaptionWithOverlay = styled.div<OverlayProps>`
  ${(props) => `
	background-image: linear-gradient(0deg, ${props.$color}, ${props.$color});
	background-size: ${props.$percentage}%;
	background-repeat: no-repeat;
	`};
  transition: background 0.2s ease;
  text-align: center;
  color: #fff;
`;
