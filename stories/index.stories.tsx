import styled from "styled-components";

export const HorizontalFlexContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  margin: 0 auto;

  & div {
    flex: 1;
  }
`;
export const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RightBottomFloater = styled(HorizontalFlexContainer)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const PrimaryButton = styled.button`
  color: var(--color-gray-200);
  background-color: var(--color-green-xdark);
  padding: 8px;
  border-radius: 2px;
  width: fit-content;
`;
