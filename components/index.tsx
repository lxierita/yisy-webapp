import styled from "styled-components";

export const StyledCardTitle = styled.h3`
  margin-top: auto;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-gray-800);
`;

export const StyledCardSubtitle = styled.h3`
  margin-top: auto;
  font-size: 1rem;
  font-weight: normal;
  color: var(--color-gray-800);
`;

export const StyledBorderedCardTitle = styled(StyledCardTitle)`
  &::before {
    content: "|";
    color: var(--color-green-normal);
    margin-right: 12px;
  }
`;
