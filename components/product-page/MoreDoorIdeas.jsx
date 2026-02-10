// "use client";

// import Image from "next/image";

// export default function MoreDoorIdeas(props) {
//     const list = props.doorImages || [];

//     function renderImages() {
//         return list.map(function (img, index) {
//             return (
//                 <div key={index} className="mb-2">
//                     <Image
//                         src={img}
//                         alt={"idea-" + index}
//                         width={155}
//                         height={155}
//                         className="rounded shadow border-3 border-white"
//                     />
//                 </div>
//             );
//         });
//     }

//     return (
//         <div className="w-[10rem] mt-18">
//             {/* Title Box */}
//             <div className="w-39 text-center border-2 border-yellow-500 text-yellow-500 font-semibold p-3 mb-2">
//                 SEE MORE <br />
//                 DOOR IDEAS <br />
//                 BELOW ⬇
//             </div>

//             {/* Images */}
//             {renderImages()}
//         </div>
//     );
// }


// responsive 

// "use client";

// import Image from "next/image";

// export default function MoreDoorIdeas(props) {
//     const list = props.doorImages || [];

//     function renderImages() {
//         return list.map(function (img, index) {
//             return (
//                 <div key={index} className="shrink-0">
//                     <Image
//                         src={img}
//                         alt={"idea-" + index}
//                         width={155}
//                         height={155}
//                         className="rounded shadow border-2 lg:border-3 border-white object-cover w-20 h-20 lg:w-[155px] lg:h-[155px]"
//                     />
//                 </div>
//             );
//         });
//     }

//     return (
//         <div className="w-full lg:w-[10rem] mt-6 lg:mt-18 flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-0">

//             {/* Title Box */}
//             <div className="
//                 w-20 h-20 lg:w-[155px] lg:h-auto 
//                 flex flex-col items-center justify-center text-center 
//                 border-2 border-yellow-500 text-yellow-500 font-semibold 
//                 p-1 lg:p-3 
//                 mb-0 lg:mb-2 
//                 shrink-0
//                 text-[9px] leading-tight lg:text-base lg:leading-normal
//             ">
//                 <span>
//                     SEE MORE <br />
//                     IDEAS <br />
//                     {/* Arrow rotates: Points right on mobile, Down on desktop */}
//                     <span className="inline-block -rotate-90 lg:rotate-0 mt-1 lg:mt-0">
//                         ⬇
//                     </span>
//                 </span>
//             </div>

//             {/* Images */}
//             {renderImages()}
//         </div>
//     );
// }


//! new 

"use client";

import Image from "next/image";

export default function MoreDoorIdeas(props) {
    const list = props.doorImages || [];
    console.log("list of right side image in the product detail page is : ",list);

    function renderImages() {
        return list.map(function (img, index) {
            return (
                // Added onClick and cursor-pointer
                <div
                    key={index}
                    className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => props.onImageClick && props.onImageClick(img)}
                >
                    <Image
                        src={img}
                        alt={"idea-" + index}
                        width={155}
                        height={155}
                        className="rounded shadow border-2 lg:border-3 border-white object-cover w-20 h-20 lg:w-[155px] lg:h-[155px]"
                    />
                </div>
            );
        });
    }

    return (
        <div className="w-full lg:w-[10rem] mt-6 lg:mt-18 flex flex-row lg:flex-col justify-center items-center gap-3 lg:gap-0">

            {/* Title Box */}
            <div className="
                w-20 h-20 lg:w-[155px] lg:h-auto 
                flex flex-col items-center justify-center text-center 
                border-2 border-yellow-500 text-yellow-500 font-semibold 
                p-1 lg:p-3 
                mb-0 lg:mb-2 
                shrink-0
                text-[9px] leading-tight lg:text-base lg:leading-normal
            ">
                <span>
                    SEE MORE <br />
                    IDEAS <br />
                    {/* Arrow rotates: Points right on mobile, Down on desktop */}
                    <span className="inline-block -rotate-90 lg:rotate-0 mt-1 lg:mt-0">
                        ⬇
                    </span>
                </span>
            </div>

            {/* Images */}
            {renderImages()}
        </div>
    );
}