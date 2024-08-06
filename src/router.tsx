import { createBrowserRouter } from "react-router-dom";
import { Index } from "./components/index";
import { MainPage } from "./components/mainpage/mainPage";
import { MicroFrontEndWrapper1, MicroFrontEndWrapper2 } from "./components/frontends/microfrontends";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<Index />),
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: 'microfrontend1',
        element: <MicroFrontEndWrapper1 />
      },
      {
        path: 'microfrontend2',
        element: <MicroFrontEndWrapper2 />
      },
    ]
  }
])