import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <h1 ref={titleRef} className="text-6xl font-bold mb-4">
        Welcome to MB Ultra Clean!
      </h1>
      <p className="text-lg text-purple-300">
        Your trusted cleaning service.
      </p>
    </div>
  );
}

export default Home;
