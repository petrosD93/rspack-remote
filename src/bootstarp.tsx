import {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements, Outlet,
    Route,
    RouteObject as RouterRouteObject,
    RouterProvider
} from 'react-router-dom'
import 'core-js/actual'
import App from "./App.tsx";
import {Home} from "./Home.tsx";



const RouteErrorBoundary = () => <div>Error</div>

const routes: RouteObject = {
    path: '/',
    element: <Outlet />,
    errorElement: <RouteErrorBoundary/>,
    children: [

        {
            path:":realm",
            element: <App/>,
            children:[
                {
                    path:"route2",
                    element: <div>test</div>
                },
                {
                    path:"route1",
                    element: <Home/>
                }
            ]
        },

    ],
}

export const buildRoutes = (routes: RouteObject): JSX.Element => {
    return (
        <Route path={routes.path} element={routes.element}>
            {routes.children?.map((route: RouteObject) => buildRoute(route))}
        </Route>
    )
}

const buildRoute = (route: RouteObject) => {
    const {path, index, children} = route

    const Fallback =()=><div>Loading</div>

    return (
        <Route
            key={`${path}_key`}
            path={path}
            {...(index ? { index: true } : {})}
            element={
                <Suspense fallback={<Fallback/>}>{route.element}</Suspense>
            }
            errorElement={<RouteErrorBoundary/>}
        >
            {(children as any)?.map((childRoute: any) => buildRoute(childRoute))}
        </Route>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(buildRoutes(routes))
)

const setEnvConfiguration = async () => {
    await fetch('/config.json')
    return new Promise(resolve => {
        resolve({})
    })
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

setEnvConfiguration()
    .then(() => {
        root.render(<RouterProvider router={router}/>)
    })
    .catch(error => {
        // eslint-disable-next-line
        console.error(error)
        root.render(<p>Problem with configuration, application cannot be started</p>)
    })




interface PortalRouteObject {
    resource?: string
    children?: RouteObject[]
}

export type RouteObject = PortalRouteObject & RouterRouteObject
