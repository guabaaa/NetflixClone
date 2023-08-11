export interface IconSizeProps {
    size: number;
};

export const PlayIcon = ({ size }: IconSizeProps) => {
    return (
        <svg
            width={`${size}vw`}
            height={`${size}vw`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Play"
        >
            <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

/** 메인 배너의 상세 정보 아이콘 */
export const DetailIcon = ({ size }: IconSizeProps) => {
    return (
        <svg
            width={`${size}vw`}
            height={`${size}vw`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Info"
        >
            <path
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export const AddIcon = ({ size }: IconSizeProps) => {
    return (
        <svg
            width={`${size}vw`}
            height={`${size}vw`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Add"
        >
            <path d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
        </svg>
    );
};

export const CheckIcon = ({ size }: IconSizeProps) => {
    return (
        <svg
            width={`${size}vw`}
            height={`${size}vw`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Checkmark"
        >
            <path
                d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

/** 콘텐츠 아이템의 상세 정보 아이콘 */
export const DetailDownArrowIcon = ({ size }: IconSizeProps) => {
    return (
        <svg
            width={`${size}vw`}
            height={`${size}vw`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="ChevronDown"
        >
            <path
                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};