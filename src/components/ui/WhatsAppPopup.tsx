import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "primeicons/primeicons.css";

const WhatsAppPopup = () => {
  const [show, setShow] = useState(true);
  const [showBadge, setShowBadge] = useState(false);

  // Trigger badge popup + shake every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBadge(true);
      setTimeout(() => setShowBadge(false), 3000); // hide after 3s
    }, 5000); // every 5s
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to know more about your services."
    );
    window.open(`https://wa.me/918792440658?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          exit={{ y: 200, opacity: 0 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer z-50"
        >
          <motion.div
            className="relative flex items-center space-x-2"
            animate={
              showBadge
                ? { x: [0, -6, 6, -4, 4, -2, 2, 0] } // shake
                : { x: 0 }
            }
            transition={{ duration: 0.6 }}
          >
            <i className="pi pi-whatsapp text-2xl" />

            {/* Animate badge popup */}
            <AnimatePresence>
              {showBadge && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow"
                >
                  1
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppPopup;