import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // أيقونة download

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section">
        {/* الصورة والأفاتار */}
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt="My Avatar"
          />
          <div className="icon-verified"></div>
        </div>

        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          I’m Ismail Alaa – Front-End Developer
        </motion.h1>

        {/* الوصف */}
        <p className="sub-title">
          I create modern, responsive, and high-performance websites using React
          and Next.js. Passionate about turning ideas into interactive web
          experiences, I specialize in building clean and scalable front-end
          solutions that delight users. Welcome to my portfolio!
        </p>

        {/* زرار Download CV مع أيقونة */}
        <a href="/CV-2.pdf" download>
          <button className="hero-download-cv-btn">
            Download CV <FiDownload style={{ marginLeft: "0.5rem" }} />
          </button>
        </a>

        {/* أيقونات التواصل الاجتماعي */}
        <div className="all-icons flex">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-twitter"></div>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://github.com/ismail-alaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-eldeghedy-9430542a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      {/* القسم الخاص بالـ Lottie Animation */}
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
