import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { fontSize } from "../../../styles/Fonts";

type CustomIconProps = {
    size: "basic" | "big";
};

export const Age15 = ({ size }: CustomIconProps) => {
    return <SmallRectangle size={size}>15+</SmallRectangle>;
};

export const HD = ({ size }: CustomIconProps) => {
    return <SmallRectangle size={size}>HD</SmallRectangle>;
};

const basic = css`
  font-size: ${fontSize.Small2};
`;
const big = css`
  font-size: ${fontSize.Normal1};
`;

const FontSize = { basic, big };

const SmallRectangle = styled.button<CustomIconProps>`
  ${({ size }) => size && FontSize[size]};
  background-color: transparent;
  color: ${theme.white.lighter};
  border: 0.1px solid ${theme.grey.darker};
`;