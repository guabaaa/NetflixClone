import { DefaultValue } from "recoil";
import { IContent } from "../interface/Interface";

/** 로컬스토리지를 활용한 즐겨찾기 기능 구현 */

export const bookmarkedLocalStorage: IContent[] = JSON.parse(localStorage.getItem("favorite") ?? "[]");

export const saveBookmarkDataToLocalStorage = (contents: IContent[]) => {
    return localStorage.setItem("favorite", JSON.stringify(contents));
};

/** 새로고침 방지용 상세 정보 데이터 */

export const detailLocalStorage: IContent = JSON.parse(localStorage.getItem("detail") ?? "{}");

export const saveDetailDataToLocalStorage = (content: IContent | DefaultValue) => {
    return localStorage.setItem("detail", JSON.stringify(content));
};