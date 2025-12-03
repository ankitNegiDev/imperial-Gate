// "use client";
// import { useRef, useState, useEffect } from "react";
// import {
//     FaVolumeMute,
//     FaVolumeUp,
//     FaPause,
//     FaPlay
// } from "react-icons/fa";

// export default function VideoSection() {

//     // States for video controls
//     const [isMuted, setMuted] = useState(true);
//     const [isPaused, setPaused] = useState(false);

//     // Lazy loading state
//     const [loadVideo, setLoadVideo] = useState(false);

//     // Ref to access the video element
//     const videoRef = useRef(null);

//     // const videoSrc = "/random-video.mp4";
//     const videoSrc = "/TheDwars Promo 01_PAF423.mp4";

//     // UseEffect with normal function for lazy loading
//     useEffect(function () {

//         // Callback function for IntersectionObserver
//         function handleIntersect(entries) {
//             if (entries[0].isIntersecting) {
//                 setLoadVideo(true);
//                 observer.disconnect();
//             }
//         }

//         // Creating the observer object
//         const observer = new IntersectionObserver(handleIntersect, {
//             threshold: 0.2
//         });

//         // Start observing
//         if (videoRef.current) {
//             observer.observe(videoRef.current);
//         }

//         // Cleanup function
//         return function () {
//             observer.disconnect();
//         };

//     }, []);

//     // Toggle mute / unmute
//     function toggleMute() {
//         const video = videoRef.current;
//         video.muted = !video.muted;
//         setMuted(video.muted);
//     }

//     // Toggle play / pause
//     function togglePlay() {
//         const video = videoRef.current;

//         if (video.paused) {
//             video.play();
//             setPaused(false);
//         } else {
//             video.pause();
//             setPaused(true);
//         }
//     }

//     return (
//         <div className="relative w-full h-screen bg-black">

//             {/* Background Video */}
//             <video
//                 ref={videoRef}
//                 src={loadVideo ? videoSrc : undefined}  // Lazy loading (if loadvideo is true then set else don't )
//                 autoPlay={loadVideo}
//                 muted
//                 loop
//                 playsInline
//                 preload="none"
//                 className="w-screen h-screen object-contain"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20"></div>

//             {/* Controls */}
//             <div className="absolute bottom-2 right-5 flex items-center gap-3 ">

//                 {/* Play / Pause */}
//                 <button
//                     onClick={togglePlay}
//                     className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg"
//                 >
//                     {isPaused ? <FaPlay size={18} /> : <FaPause size={18} />}
//                 </button>

//                 {/* Mute / Unmute */}
//                 <button
//                     onClick={toggleMute}
//                     className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-lg"
//                 >
//                     {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
//                 </button>

//             </div>

//         </div>
//     );
// }




"use client";
import React, { useRef, useState, useEffect } from "react";
import {
    FaVolumeMute,
    FaVolumeUp,
    FaPause,
    FaPlay
} from "react-icons/fa";

export default function VideoSection() {

    //  we are using two separate states to control the Mobile and Desktop videos independently
    const [isMuted, setMuted] = useState(true);
    const [isPaused, setPaused] = useState(false);
    const [loadVideo, setLoadVideo] = useState(false);

    //  we are using two separate refs to control the Mobile and Desktop videos independently
    const mobileVideoRef = useRef(null);
    const desktopVideoRef = useRef(null);
    const containerRef = useRef(null);

    const videoSrc = "/TheDwars Promo 01_PAF423.mp4";

    //  we are using IntersectionObserver to lazy load the video
    useEffect(function () {

        function handleIntersect(entries) {
            if (entries[0].isIntersecting) {
                setLoadVideo(true);
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(handleIntersect, { threshold: 0.2 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return function () {
            observer.disconnect();
        };
    }, []);

    //  we are using two separate functions to control the Mobile and Desktop videos independently
    function toggleMute() {
        const newState = !isMuted;
        setMuted(newState);

        if (mobileVideoRef.current) {
            mobileVideoRef.current.muted = newState;
        }
        if (desktopVideoRef.current) {
            desktopVideoRef.current.muted = newState;
        }
    }


    function togglePlay() {
        const newState = !isPaused;
        setPaused(newState);

        const videos = [mobileVideoRef.current, desktopVideoRef.current];

        videos.forEach(function (video) {
            if (!video) return;
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    return (
        <section ref={containerRef} className="w-full bg-black">

            {/* mobile layout -- using object contain for now  */}
            <div className="block md:hidden relative w-full aspect-video bg-black">
                <video
                    ref={mobileVideoRef}
                    src={loadVideo ? videoSrc : undefined}
                    autoPlay={loadVideo}
                    muted={isMuted}
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-contain"
                />

                <div className="absolute bottom-0 right-3 flex gap-3 z-20">
                    <ControlButtons
                        togglePlay={togglePlay}
                        toggleMute={toggleMute}
                        isPaused={isPaused}
                        isMuted={isMuted}
                        size="small"
                    />
                </div>
            </div>

           {/* Desktop layout  */}
            <div className="hidden md:block relative w-full h-screen bg-black">
                <video
                    ref={desktopVideoRef}
                    src={loadVideo ? videoSrc : undefined}
                    autoPlay={loadVideo}
                    muted={isMuted}
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

                <div className="absolute bottom-5 right-5 flex items-center gap-3 z-20">
                    <ControlButtons
                        togglePlay={togglePlay}
                        toggleMute={toggleMute}
                        isPaused={isPaused}
                        isMuted={isMuted}
                        size="large"
                    />
                </div>
            </div>

        </section>
    );
}

// helper componentnt
function ControlButtons(props) {
    const { togglePlay, toggleMute, isPaused, isMuted, size } = props;

    const pSize = size === "small" ? "p-2" : "p-3";
    const iconSize = size === "small" ? 14 : 18;

    return (
        <>
            <button
                onClick={togglePlay}
                className={`bg-white/20 hover:bg-white/30 text-white ${pSize} rounded-full backdrop-blur-lg transition-transform active:scale-95`}
            >
                {isPaused ? <FaPlay size={iconSize} /> : <FaPause size={iconSize} />}
            </button>

            <button
                onClick={toggleMute}
                className={`bg-white/20 hover:bg-white/30 text-white ${pSize} rounded-full backdrop-blur-lg transition-transform active:scale-95`}
            >
                {isMuted ? <FaVolumeMute size={iconSize} /> : <FaVolumeUp size={iconSize} />}
            </button>
        </>
    );
}