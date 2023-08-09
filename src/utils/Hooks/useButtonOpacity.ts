/** 슬라이드 이동 버튼, 페이지 인디케이터 투명도 조절 */

export const useButtonOpacity = () => {
    let opacitySetTimeout: ReturnType<typeof setTimeout>;

    const setButtonOpacity = (opacity: number) => {
        document.documentElement.style.setProperty("--slideHoverOpacity", `${opacity}`);
    };

    const setButtonOpacityAfterDelay = (opacity: number) => {
        opacitySetTimeout = setTimeout(() => {
            setButtonOpacity(opacity);
        }, 500);
    };

    const setButtonOpacityAfterDelayInvalidation = () => {
        clearTimeout(opacitySetTimeout);
    };

    return { setButtonOpacity, setButtonOpacityAfterDelay, setButtonOpacityAfterDelayInvalidation };
};