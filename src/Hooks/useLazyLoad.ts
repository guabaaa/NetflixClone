import { useState, useEffect } from "react";

export const useLazyLoad = (slideRefs: React.RefObject<HTMLElement>[]) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const currentIndex = slideRefs.findIndex((ref) => ref.current === entry.target);
                    if (currentIndex === currentSlide) {
                        setCurrentSlide((prev) => prev + 1);
                    }
                    /** 모바일 예외처리 */
                    if (currentSlide === 1) {
                        setCurrentSlide((prev) => prev + 1);
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        slideRefs.forEach((slideRef) => {
            if (slideRef.current) {
                observer.observe(slideRef.current);
            }
        });

        return () => {
            slideRefs.forEach((slideRef) => {
                if (slideRef.current) {
                    observer.unobserve(slideRef.current);
                }
            });
        };
    }, [currentSlide, slideRefs]);

    return currentSlide;
};