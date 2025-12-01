import FloatingButtons from "../../components/home-page/FloatingButtons";
import ContactUs from "../../components/contact-us/ContactUs";
import FAQ from "../../components/home-page/Faq";


export default function Contact() {
    return (
        <main className="pt-20">
            <ContactUs />
            <FloatingButtons/>
            <FAQ/>
        </main>
    );
}
