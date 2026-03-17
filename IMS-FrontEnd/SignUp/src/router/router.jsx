import { createBrowserRouter } from "react-router-dom";

import AuthLayout          from "../Layouts/AuthLayout";
import SignUpPage          from "../pages/SignUpPage";
import LoginPage           from "../pages/LogInPage";
import SignUpPassword       from "../pages/SignUpPassword"
import ForgetPasswordPage from "../pages/ForgetPasswordPage"; // add more here

// ── Router ────────────────────────────────────────────────────────────────────
//
// AuthLayout wraps all auth pages:
//   /signup  → SignUpPage
//   /login   → LoginPage
//
// To add a new auth page:
//   1. Create src/pages/YourPage.jsx  (just a <SignUpCard> + content, no layout)
//   2. Import it here
//   3. Add a <Route path="/your-path" element={<YourPage />} /> inside AuthLayout

const router = createBrowserRouter([
  {
    element: <AuthLayout />,   // Header + PatternBackground + Outlet + Footer
    children: [
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login",  element: <LoginPage /> },
      { path:"/signup2", element:<SignUpPassword/>},
      { path: "/forget-password", element: <ForgetPasswordPage /> },
    ],
  },
]);

export default router;