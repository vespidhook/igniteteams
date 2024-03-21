import { TextInput } from "react-native";
import styled, { css } from "styled-components";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};

  border-radius: 6px;
  padding: 16px;
`;