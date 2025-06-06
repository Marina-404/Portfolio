import { useEffect, useState } from "react";
import "../App.css";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button ${visible ? "visible" : ""}`}>
      <button type="button" onClick={scrollToTop} className="scroll-button">
        <IoIosArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;