/** 즐겨찾기 기능 커스텀훅 */

import { useRecoilState } from "recoil";
import { FavoriteAtom } from "../../lib/atoms";
import { IContent } from "../../interface/Interface";
import { saveBookmarkDataToLocalStorage } from "../Local";

export const useBookmark = () => {
    const [favoriteContents, setFavoriteContents] = useRecoilState(FavoriteAtom);
    const setFavoriteHandler = (contents: IContent[]) => {
        setFavoriteContents(contents);
        saveBookmarkDataToLocalStorage(contents);
    };

    const addFavoriteContents = (data: IContent) => {
        if (data) {
            const addedContents = [data, ...favoriteContents];
            setFavoriteHandler(addedContents);
        }
    };

    const removeFavoriteContents = (data: IContent) => {
        if (data) {
            const removedContents = favoriteContents.filter((content) => content.id !== data.id);
            setFavoriteHandler(removedContents);
        }
    };

    return { addFavoriteContents, removeFavoriteContents };
};