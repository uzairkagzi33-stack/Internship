import { createBrowserRouter } from "react-router-dom";

import AuthLayout          from "../Layouts/AuthLayout";
import SignUpPage          from "../pages/SignUpPage";
import LoginPage           from "../pages/LogInPage";
import SignUpPassword       from "../pages/SignUpPassword"
import ForgetPasswordPage from "../pages/ForgetPasswordPage"; // add more here
import VerifyOTPpage from "../pages/VerifyOTPpage";
import ResetPasswordPage from "../pages/ResetPasswordPage"

const router = createBrowserRouter([
  {
    element: <AuthLayout />,   // Header + PatternBackground + Outlet + Footer
    children: [
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login",  element: <LoginPage /> },
      { path:"/signup2", element:<SignUpPassword/>},
      { path: "/forget-password", element: <ForgetPasswordPage /> },
      { path:"/verify-otp" , element: <VerifyOTPpage/>},
      { path:"/reset-password" , element: <ResetPasswordPage/>},

    ],
  },
]);

export default router;