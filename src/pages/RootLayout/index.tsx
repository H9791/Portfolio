// import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Skills />
                <Projects />
                {/* <Outlet /> */}
            </main>
            <Footer />
        </>
    );
}
