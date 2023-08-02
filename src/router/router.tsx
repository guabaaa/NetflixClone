import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Container from "../components/global/Container";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Container />
    }
]);