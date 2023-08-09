import { useQuery } from "@tanstack/react-query";
import { IContent, IGetData } from "../../interface/Interface";
import { homeAPI, movieAPI, tvAPI } from "../../api/Apis";
import { useRecoilValue } from "recoil";
import { FavoriteAtom } from "../../lib/atoms";

export interface IUseQueryWithDummyResult {
    data: IGetData;
    isLoading: boolean;
    isError: boolean;
}

export const dummyData: IContent = {
    adult: false,
    backdrop_path: "",
    genres: [],
    id: 0,
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: new Date(),
    tagline: "",
    title: "",
    vote_average: 0,
    category: "",
    media_type: "tv",
    production_companies: [],
    production_countries: [],
};

/** 각 페이지 슬라이드들에 사용될 데이터 */

export const useQueryWithDummy = () => {
    const useCreateQuery = (queryKey: string[], queryFn: () => Promise<IGetData>): IUseQueryWithDummyResult => {
        const {
            data = { results: [] },
            isLoading,
            isError,
        } = useQuery<IGetData>(queryKey, queryFn, {
            select: (data) => {
                const copyData :IGetData = JSON.parse(JSON.stringify(data));
                if (copyData.results[0].id === 0) {
                    return copyData;
                } else {
                    copyData.results.unshift(dummyData);
                    return copyData;
                }
            },
        });

        return { data, isLoading, isError };
    };

    return {
        Trending: useCreateQuery(["trending"], homeAPI.trending),
        PopularMovie: useCreateQuery(["popular", "movie"], movieAPI.popular),
        PopularTv: useCreateQuery(["popular", "tv"], tvAPI.popular),
        TopRateMovie: useCreateQuery(["top_rated", "movie"], movieAPI.top_rated),
        TopRateTV: useCreateQuery(["top_rated", "tv"], tvAPI.top_rated),
        NowPlayingMovie: useCreateQuery(["nowPlaying", "movie"], movieAPI.nowPlaying),
        OnTheAirTV: useCreateQuery(["on_the_air", "tv"], tvAPI.on_the_air),
        UpcomingMovie: useCreateQuery(["upcoming", "movie"], movieAPI.upcoming),
        AiringTodayTV: useCreateQuery(["airing_today", "tv"], tvAPI.airing_today),
    };
};

/** 내가 찜한 시리즈와 영화 슬라이드에 사용될 데이터 */

export const useLocalWithDummy = (media_type: "movie" | "tv") => {
    const favoriteItem = useRecoilValue(FavoriteAtom);
    const FilteredFavoriteItem = favoriteItem.filter((content) => content.media_type === media_type);

    /** 즐겨찾기 슬라이드의 맨 앞에 더미 데이터 넣기 */
    const unshiftDummy = (): {
        results: IContent[];
    } => {
        const favoriteItemCopyObject = { results: JSON.parse(JSON.stringify(FilteredFavoriteItem)) };
        if (favoriteItemCopyObject?.results[0]?.id === 0) return favoriteItemCopyObject;
        else {
            favoriteItemCopyObject?.results.unshift(dummyData);
            return favoriteItemCopyObject;
        }
    };

    const favoriteItemCopyWithDummy = unshiftDummy();

    return favoriteItemCopyWithDummy;
};