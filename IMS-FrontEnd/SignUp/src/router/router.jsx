import { createBrowserRouter } from "react-router-dom";

import AuthLayout          from "../layouts/AuthLayout";
import SignUpPage          from "../pages/SignUpPage";
import LoginPage           from "../pages/LogInPage";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage"; // add more here

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
      // { path: "/forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
]);

export default router;