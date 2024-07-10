import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StartPage } from "./pages/start-page/StartPage.tsx";
import { SelectPage } from "./pages/select-page/SelectPage.tsx";
import { RegisterPage } from "./pages/register-page/RegisterPage.tsx";
import { QuestionPageFather } from "./pages/questions-pages/QuestionPageFather.tsx";
import { NewSelectPage } from "./pages/new-select-page/NewSelectPage.tsx";
import { EditProfilePage } from "./pages/edit-profile-page/EditProfilePage.tsx";
import { AuthPage } from "./pages/auth-page/AuthPage.tsx";
import { MainPage } from "./pages/main-page/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/start",
    element: <StartPage />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/question",
    element: <QuestionPageFather />,
  },
  {
    path: "/new_select",
    element: <NewSelectPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/edit_profile",
    element: <EditProfilePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
