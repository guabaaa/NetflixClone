import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ChildrenProps } from "../../../interface/Interface";

const BackdropOverlay = ({ children }: ChildrenProps) => {
    const navigate = useNavigate();

    return <Wrapper onClick={() => navigate(-1)}>{children}</Wrapper>;
};

export default BackdropOverlay;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;