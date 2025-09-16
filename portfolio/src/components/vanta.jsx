import { useEffect, useRef } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    //Only run if VANTA and TOPOLOGY are available
    if (
      window.VANTA &&
      window.VANTA.TOPOLOGY &&
      vantaRef.current &&
      !vantaEffect.current
    ) {
      try {
        vantaEffect.current = window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x382e1b,
          backgroundColor: 0x020c45,
        });
        //mininize delay
        const canvas = vantaRef.current.querySelector("canvas");
        if (canvas) {
          canvas.style.opacity = "0";
          canvas.style.transition = "opacity 1s ease-in-out";
          requestAnimationFrame(() => {
            canvas.style.opacity = "1";
          });
        }
      } catch (err) {
        console.error("VANTA init error:", err);
      }
    }

    return () => {
      //Only destroy if effect exists and ref is still mounted
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (err) {
          // Ignore errors on destroy
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="w-full h-screen bg-[#020c45]" />;
};

export default VantaBackground;