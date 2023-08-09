import Loadingspinner from "../../components/molecules/Loading/Loadingspinner";
import Slide from "../../components/organisms/Slide/Slide";
import { IContent } from "../../interface/Interface";
import { useLazyLoad } from "./useLazyLoad";
import { IUseQueryWithDummyResult } from "./useSlideDataWithDummy";

interface IuseRenderSlide {
    ref: React.RefObject<HTMLDivElement>;
    title: string;
    category: string;
    type: string;
    data?: IUseQueryWithDummyResult;
    bookmarkdata?: {
        results: IContent[];
    };
}
export class SlideObject implements IuseRenderSlide {
    constructor(
        public ref: React.RefObject<HTMLDivElement>,
        public title: string,
        public category: string,
        public type: string,
        public data?: IUseQueryWithDummyResult,
        public bookmarkdata?: { results: IContent[] }
    ) {}
}

export const useRenderSlide = (slides: IuseRenderSlide[]) => {
    /** 스크롤 시 슬라이드 추가 렌더링되는 로직 */
    const currentSlide = useLazyLoad(slides.map((slide) => slide.ref));

    /** 슬라이드 렌더 함수 */
    return slides.map((slide, i) => {
        const { ref, title, category, type, data, bookmarkdata } = slide;

        /** API 데이터를 이용한 슬라이드 */
        if (data) {
            const { data: categoryData, isLoading, isError } = data;

            if (isLoading) return <Loadingspinner key={category} />;
            if (isError) return <div key={category}>에러</div>;
            if (currentSlide >= i) {
                return (
                    <div key={category} ref={ref}>
                        <Slide title={title} category={category} type={type} {...categoryData} />
                    </div>
                );
            } else return null;
        }

        /** 로컬 스토리지에 북마크된 슬라이드 */
        if (bookmarkdata) {
            return (
                currentSlide >= i && (
                    <div key={category} ref={ref} className={bookmarkdata?.results?.length > 1 ? "showSlide" : "hiddenSlide"}>
                        <Slide title={title} category={category} type={type} {...bookmarkdata} />
                    </div>
                )
            );
        } else return null;
    });
};