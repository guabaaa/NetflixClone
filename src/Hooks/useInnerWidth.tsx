import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { slideItemCountAtom } from "../../lib/atoms";

export const useInnerWidth = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [slideItemCount, setSlideItemCount] = useRecoilState(slideItemCountAtom);
    const { totalSlideItemNum, bothSideExceptSlideItemNum } = slideItemCount;

    /** 뷰 포트 너비 상태값으로 세팅 */
    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    /** 뷰 포트 너비에 따른 슬라이드 아이템 수 조절 */
    useEffect(() => {
        if (innerWidth >= 1400) return setSlideItemCount({ totalSlideItemNum: 8, bothSideExceptSlideItemNum: 6 });
        else if (innerWidth >= 1100) return setSlideItemCount({ totalSlideItemNum: 7, bothSideExceptSlideItemNum: 5 });
        else if (innerWidth >= 800) return setSlideItemCount({ totalSlideItemNum: 6, bothSideExceptSlideItemNum: 4 });
        else if (innerWidth >= 500) return setSlideItemCount({ totalSlideItemNum: 5, bothSideExceptSlideItemNum: 3 });
        else return setSlideItemCount({ totalSlideItemNum: 4, bothSideExceptSlideItemNum: 2 });
    }, [innerWidth, setSlideItemCount]);

    return { innerWidth, totalSlideItemNum, bothSideExceptSlideItemNum };
};