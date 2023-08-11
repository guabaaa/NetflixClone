import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryAtom } from "../../../lib/atoms";
import { theme } from "../../../styles/theme";

export interface ArrowProps {
    direction: "prev" | "next";
    category?: string;
}

const nextArrow = "\u276F"; /** ❯ */
const prevArrow = "\u276E"; /** ❮ */

const Arrow = ({ direction, category }: ArrowProps) => {
        const hoveredCategory = useRecoilValue(categoryAtom);

        /** slide-hover => opacity:전역 css 변수 */
        /** pagination-item => opacity:0 */
        const className = category === hoveredCategory ? "slide-hover" : "pagination-item";
        const arrow = direction === "next" ? nextArrow : prevArrow;

        return <ArrowStyle className={className}>{arrow}</ArrowStyle>;
    };

export default Arrow;

const ArrowStyle = styled.div`
  color: ${theme.white.lighter};
  font-size: 3rem;
  &:hover {
    font-size: 4rem;
  }
  @media (max-width: 1099px) {
    font-size: 2.5rem;
    &:hover {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 799px) {
    font-size: 2rem;
    &:hover {
      font-size: 3rem;
    }
  }
  @media (max-width: 499px) {
    font-size: 1.5rem;
    &:hover {
      font-size: 2rem;
    }
  }
`;