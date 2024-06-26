/*import { Route, Routes } from "react-router-dom"
import { InitPage, LoginPage, RedSocialPage, UserForm } from "../pages"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/redSocial' element={
                <PublicRoute>
                    <RedSocialPage />
                </PublicRoute>
            } />
            <Route path="/" element={
                <PrivateRoute>
                    <InitPage />
                </PrivateRoute>
            } />
            <Route path="/register" element={
                <PrivateRoute>
                    <UserForm />
                </PrivateRoute>
            } />
            <Route path="/login" element={
                <PrivateRoute>
                    <LoginPage />
                </PrivateRoute>
            } />
        </Routes>
    </>
  )
}*/

import { Route, Routes } from "react-router-dom"
import { InitPage, LoginPage, RedSocialPage, UserForm } from "../pages"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/redSocial" element={<PrivateRoute><RedSocialPage /></PrivateRoute>} />
        <Route path="/login" element={<PublicRoute>e<LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><UserForm /></PublicRoute>} />
        <Route path="/" element={<PublicRoute><InitPage /></PublicRoute>} />
    </Routes>
  )
}
