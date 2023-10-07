import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Base from "./pages/Base"
import NotFound from "./pages/NotFound"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
