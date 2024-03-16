import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
} from "react-router-dom";

import { Toaster } from "@components/common/sonner";
import { ScrollToTop } from "@components/common/scroll-to-top";

import { MainLayout } from "@/layouts";

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            <Route path="/" element={<MainLayout />} />
        </Route>,
    ),
);

export default function App() {
    return (
        <React.Fragment>
            <ScrollToTop />
            <RouterProvider router={router} />
            <Toaster />
        </React.Fragment>
    );
}
