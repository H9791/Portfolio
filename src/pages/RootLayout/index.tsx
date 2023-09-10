import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import AnimatedParticles from "../../components/Particles";
import About from "../../components/About";

export default function RootLayout() {
    return (
        <>
            <AnimatedParticles />
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </>
    );
}
