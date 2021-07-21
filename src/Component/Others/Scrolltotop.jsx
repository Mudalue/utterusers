import React, {useState, useEffect} from "react";
import { ArrowUp } from "react-feather";

const Scrolltotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibilty = () => {
    window.pageYOffset > 200 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollTOTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibilty);
  }, []);
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <buttton className="btn btn-warning btn-lg" onClick={scrollTOTop}>
          <ArrowUp size={30}/>
        </buttton>
      )}
    </div>
  );
};

export default Scrolltotop;
