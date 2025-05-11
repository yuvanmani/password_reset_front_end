import { createBrowserRouter, RouterProvider } from "react-router"
import Register from "./pages/Register"
import Layout from "./wrappers/Layout"
import Forgot_pass from "./pages/Forgot_pass"
import { Provider } from "react-redux"
import store from "./redux/app/store";
import ToastProvider from "./components/ToastProvider";

const routes = [{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Register />
    },
    {
      path: "/forgot-password",
      element: <Forgot_pass />
    }
  ]
}]

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }} />
    </Provider>
  )
}

export default App