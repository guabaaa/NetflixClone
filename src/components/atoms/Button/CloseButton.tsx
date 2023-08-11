import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

interface ICloseButton {
    top: string;
    right: string;
    size: "detailButton";
}

const CloseButton = ({ top, right, size }: ICloseButton) => {
    const navigate = useNavigate();

    return (
        <Close top={top} right={right} size={size} onClick={() => navigate(-1)}>
            X
        </Close>
    );
};

export default CloseButton;

const detailButton = css`
  width: 3.5rem;
  height: 3.5rem;
  font-size: 2rem;
`;

const sizes = { detailButton };

const Close = styled.button<ICloseButton>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  ${({ size }) => size && sizes[size]}
  border-radius: 100%;
  background-color: ${theme.black.darker};
  color: ${theme.white.lighter};
  border: none;
  cursor: pointer;
`;