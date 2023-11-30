import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {About} from "@/pages/About";
import {Shop} from "@/pages/Shop";
import {Suspense} from "react";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/About',
                element: <Suspense fallback={'Loading...'}><About/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><Shop/></Suspense>
            }
        ]
    },
]);

const container = createRoot(root)

container.render( <RouterProvider router={router} />)