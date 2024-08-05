import { createBrowserRouter } from "react-router-dom";
import { Index } from "./components/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<Index />)
  }
])