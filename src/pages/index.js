import { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegCommentDots, FaRegShareSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const videos = [
  { id: 1, src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", products: ["Product 1", "Product 2"] },
  { id: 2, src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", products: ["Product 3"] },
  { id: 3, src: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", products: ["Product 4", "Product 5"] },
  { id: 4, src: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4", products: ["Product 6"] },
  { id: 5, src: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4", products: ["Product 7", "Product 8"] }
];

const VideoReel = ({ video, isActive }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay blocked: ", error));
      const updateProgress = () => {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      };
      videoRef.current.addEventListener("timeupdate", updateProgress);
      return () => videoRef.current.removeEventListener("timeupdate", updateProgress);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        preload="auto"
      ></video>
      <div className="absolute bottom-10 left-4 flex flex-col gap-2 text-white">
        {video.products.map((product, index) => (
          <motion.a
            key={index}
            href={`/product/${product.replace(/\s+/g, "-").toLowerCase()}`}
            className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm hover:bg-opacity-80 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product}
          </motion.a>
        ))}
      </div>
      <div className="absolute top-1/2 right-5 flex flex-col gap-6 text-white text-4xl transform -translate-y-1/2">
        <button onClick={() => setLiked(!liked)}>{liked ? <FaRegHeart className="text-red-500 text-5xl" /> : <FaRegHeart className="text-5xl" />}</button>
        <button><FaRegCommentDots className="text-5xl" /></button>
        <button><FaRegShareSquare className="text-5xl" /></button>
      </div>
      <div className="absolute bottom-4 left-0 w-full px-4">
        <div className="h-1 bg-gray-600 w-full rounded-full">
          <div className="h-1 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

const VideoReelsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videos = containerRef.current.children;
      let currentIndex = activeIndex;
      for (let i = 0; i < videos.length; i++) {
        const rect = videos[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentIndex = i;
          break;
        }
      }
      setActiveIndex(currentIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory" ref={containerRef}>
      <header className="w-full py-4 bg-black text-white text-center text-xl font-bold sticky top-0 z-10">Reels</header>
      {videos.map((video, index) => (
        <div key={video.id} className="snap-center">
          <VideoReel video={video} isActive={index === activeIndex} />
        </div>
      ))}
    </div>
  );
};

export default VideoReelsPage;