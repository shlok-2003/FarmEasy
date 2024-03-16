import React from "react";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromChildren(<Route></Route>));

export default function App() {
    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
}
