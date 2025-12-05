// function YouTubeEmbed() {
//     return (
//         <div className="w-[97.7%] aspect-video rounded-lg overflow-hidden shadow mt-15 ml-4">
//             <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/mXl-12JtCQM"
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//             ></iframe>
//         </div>
//     );
// }

// export default YouTubeEmbed;


// responsive 

"use client";

function YouTubeEmbed() {
    return (
        <div
            className="
                relative 
                w-full lg:w-[97.7%]          /* Full width on mobile, specific % on desktop */
                aspect-video 
                rounded-xl 
                overflow-hidden 
                shadow-2xl 
                mt-8 lg:mt-15                /* Smaller top margin on mobile */
                mx-auto lg:ml-4              /* Center on mobile, offset left on desktop */
                border border-white/20       /* Subtle border to match theme */
            "
        >
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/mXl-12JtCQM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeEmbed;