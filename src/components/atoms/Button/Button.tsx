import styled, { css } from "styled-components";
import { flex } from "../../../styles/css";
import { theme } from "../../../styles/theme";

export interface IButtonEventProps {
    onClick?: (() => void) | ((event: any) => void);
}

interface IButtonProps extends IButtonEventProps {
    borderColor: "none" | "white" | "grey";
    whiteFont?: boolean;
    circle?: boolean;
    children?: React.ReactNode;
}

const Button = ({ children, onClick, borderColor, whiteFont, circle, ...rest }: IButtonProps) => {
    const styles = { whiteFont, borderColor, circle };

    return (
        <ButtonContainer onClick={onClick} {...styles} {...rest}>
            {children}
        </ButtonContainer>
    );
};

export default Button;

const none = css`
  border: none;
`;
const white = css`
  border: 2px solid ${theme.white.lighter};
`;
const grey = css`
  border: 2px solid ${theme.grey.darker};
`;

const border = { none, white, grey };

const ButtonContainer = styled.button<IButtonProps>`
  ${flex("none")}
  ${({ borderColor }) => borderColor && border[borderColor]}
  color: ${({ whiteFont }) => whiteFont && theme.white.lighter};
  border-radius: ${({ circle }) => (circle ? "100%" : "4px")};
  cursor: pointer;
`;