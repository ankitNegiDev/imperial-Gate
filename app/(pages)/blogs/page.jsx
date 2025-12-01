
import FloatingButtons from "../../components/home-page/FloatingButtons";
import Blogs from "../../components/blogs/Blogs";
import FAQ from "../../components/home-page/Faq";

function Blog(){

    return(
        <>
            {/* <h1 className="pt-50 text-center text-4xl">Blogs page coming sooon</h1> */}
            <Blogs/>
            <FloatingButtons/>
            <FAQ/>
        </>
    );
}

export default Blog;