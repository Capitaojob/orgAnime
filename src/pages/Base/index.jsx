import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import SeriesProvider from "../../context/Series"

export default function Base() {
    return (
        <main>
            <Header />
            <SeriesProvider>
                <Container>
                    <Outlet />
                </Container>
            </SeriesProvider>
            <Footer />
        </main>
    )
}
