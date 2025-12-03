"use client";

import Image from "next/image";

export default function MoreDoorIdeas(props) {
    const list = props.doorImages || [];

    function renderImages() {
        return list.map(function (img, index) {
            return (
                <div key={index} className="mb-2">
                    <Image
                        src={img}
                        alt={"idea-" + index}
                        width={155}
                        height={155}
                        className="rounded shadow border-3 border-white"
                    />
                </div>
            );
        });
    }

    return (
        <div className="w-[10rem] mt-18">
            {/* Title Box */}
            <div className="w-39 text-center border-2 border-yellow-500 text-yellow-500 font-semibold p-3 mb-2">
                SEE MORE <br />
                DOOR IDEAS <br />
                BELOW ⬇
            </div>

            {/* Images */}
            {renderImages()}
        </div>
    );
}
