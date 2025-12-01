import FloatingButtons from "../../components/home-page/FloatingButtons";
import AboutUs from "../../components/about-us/AboutUs";
import FAQ from "../../components/home-page/Faq";


export default function Contact() {
    return (
        <main className="pt-20">
            <AboutUs />
            <FloatingButtons/>
            <FAQ/>
        </main>
    );
}
