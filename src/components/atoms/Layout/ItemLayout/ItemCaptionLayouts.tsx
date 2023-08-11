import styled, { css } from "styled-components";
import { font } from "../../../../styles/Fonts";
import { flex } from "../../../../styles/css";
import { motion } from "framer-motion";
import { theme } from "../../../../styles/theme";

/** 아이템 콘텐츠 커버 이미지 */
export const ContentCoverImage = css<{ bgimg: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${({ bgimg }) => bgimg});
  background-size: cover;
  background-position: center center;
`;

/** 콘텐츠 아이템 상세 정보 레이아웃 */
export const ItemCaptionWrapper = styled(motion.div)`
  padding: 1.5rem;
  background-color: ${theme.black.veryDark};
  margin-top: -0.1rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 0;
  pointer-events: none;
`;

/** ButtonBox의 레이아웃 */
export const FlexPaddingContainer = styled.div`
  display: flex;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;
export const FlexDivLeft = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const FlexDivRight = styled.div`
  margin-left: auto;
`;

/** InfoBox의 레이아웃 */
export const Information = styled.div`
  ${flex("none")}
  ${font.item_text}
  gap: 0.6rem;
  margin-top: 1.5rem;
  @media (max-width: 432px) {
    display: block;
  }
`;

/** TagBox의 레이아웃 */
export const Tag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  ${font.item_text}
  li {
    position: relative;
  }
  li:not(:first-child) {
    padding-left: 1rem;
  }
  li:not(:first-child)::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: ${theme.grey.darker};
    border-radius: 100%;
  }
`;