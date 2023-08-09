import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import router from "./Router";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3600000,
            cacheTime: 3600000,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </RecoilRoot>
);