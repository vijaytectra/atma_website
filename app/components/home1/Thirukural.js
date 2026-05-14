"use client";

import { useState, useEffect } from "react";
import styles from "./Thirukural.module.css";
import Image from "next/image";

const thirukurals = [
  {
    line1: "மிகினும் குறையினும் நோய்செய்யும் நூலோர்",
    line2: "வளிமுதலா எண்ணிய மூன்று.",
    name: "மருந்து",
    position: "941",
    meadning_line:
      "மருத்துவ நூலோர் வாதம் பித்தம் சிலேத்துமம் என எண்ணிய மூன்று அளவுக்கு மிகுந்தாலும் குறைந்தாலும் நோய் உண்டாகும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது",
    line2: "அற்றது போற்றி உணின்.",
    name: "மருந்து",
    position: "942",
    meadning_line:
      "முன் உண்ட உணவு செரித்த தன்மை ஆராய்ந்து போற்றியப் பிறகு தக்க அளவு உண்டால், உடம்பிற்கு மருந்து என ஒன்று வேண்டியதில்லை.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "அற்றால் அறவறிந்து உண்க அஃதுடம்பு",
    line2: "பெற்றான் நெடிதுய்க்கும் ஆறு.",
    name: "மருந்து",
    position: "943",
    meadning_line:
      "முன் உண்ட உணவு செரித்துவிட்டால், பின் வேண்டிய அளவு அறிந்து உண்ணவேண்டும், அதுவே உடம்பு பெற்றவன் அதை நெடுங்காலம் செலுத்தும் வழியாகும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "அற்றது அறிந்து கடைப்பிடித்து மாறல்ல",
    line2: "துய்க்க துவரப் பசித்து.",
    name: "மருந்து",
    position: "944",
    meadning_line:
      "முன் உண்ட உணவு செரித்த தன்மையை அறிந்து மாறுபாடில்லாத உணவுகளைக் கடைபிடித்து அவற்றையும் பசித்த பிறகு உண்ண வேண்டும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "மாறுபாடு இல்லாத உண்டி மறுத்துண்ணின்",
    line2: "ஊறுபாடு இல்லை உயிர்க்கு.",
    name: "மருந்து",
    position: "945",
    meadning_line:
      "மாறுபாடில்லாதா உணவை அளவு மீறாமல் மறுத்து அளவோடு உண்டால், உயிர் உடம்பில் வாழ்வதற்கு இடையூறான நோய் இல்லை.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "இழிவறிந்து உண்பான்கண் இன்பம்போல் நிற்கும்",
    line2: "கழிபேர் இரையான்கண் நோய்.",
    name: "மருந்து",
    position: "946",
    meadning_line:
      "குறைந்த அளவு இன்னதென்று அறிந்து உண்பவனிடத்தில் இன்பம் நிலைநிற்பது போல, மிகப்பெரிதும் உண்பவனிடத்தில் நோய் நிற்க்கும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "தீயள வன்றித் தெரியான் பெரிதுண்ணின்",
    line2: "நோயள வின்றிப் படும்.",
    name: "மருந்து",
    position: "947",
    meadning_line:
      "பசித்தீயின் அளவின் படி அல்லாமல், அதை ஆராயாமல் மிகுதியாக உண்டால் , அதனால் நோய்கள் அளவில்லாமல் ஏற்ப்பட்டு விடும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்",
    line2: "வாய்நாடி வாய்ப்பச் செயல்.",
    name: "மருந்து",
    position: "948",
    meadning_line:
      "நோய் இன்னதென்று ஆராய்ந்து, நோயின் காரணம் ஆராய்ந்து, அதைத் தணிக்கும் வழியையும் ஆராய்ந்து, உடலுக்கு பொருந்தும் படியாகச் செய்யவேண்டும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "உற்றான் அளவும் பிணியளவும் காலமும்",
    line2: "கற்றான் கருதிச் செயல்.",
    name: "மருந்து",
    position: "949",
    meadning_line:
      "மருத்துவ நூலைக் கற்றவன், நோயுற்றவனுடைய வயது முதலியவற்றையும், நோயின் அளவையும், காலத்தையும் ஆராய்ந்து செய்ய வேண்டும்.",
    exp_name: "மு. வரதராசன்",
  },
  {
    line1: "உற்றவன் தீர்ப்பான் மருந்துழைச் செல்வானென்று",
    line2: "அப்பால் நாற்கூற்றே மருந்து.",
    name: "மருந்து",
    position: "950",
    meadning_line:
      "நோயுற்றவன், நோய் தீர்க்கும் மருத்துவன், மருந்து, மருந்தை அங்கிருந்து கொடுப்பவன் என்று மருத்துவ முறை அந்த நான்குவகைப் பாகுபாடு உடையது.",
    exp_name: "மு. வரதராசன்",
  },
];

function ThirukuralSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === thirukurals.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Reset animation after it finishes
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === thirukurals.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className={styles.thirukuralSection}>
      <div className={styles.kural}>
        <div className={styles.slider}>
          <div
            className={`${styles.slide} ${
              isAnimating ? styles.animateSlide : ""
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <div className={styles.content}>
              <p className={styles.title}>{thirukurals[currentIndex].line1}</p>
              <p className={styles.title}>
                {thirukurals[currentIndex].line2}
                <span
                  style={{
                    color: "var(--grey)",
                    fontSize: "80%",
                    marginLeft: "10px",
                  }}
                >
                  — {thirukurals[currentIndex].name}{" "}
                  {thirukurals[currentIndex].position}
                </span>
              </p>
              <p
                style={{ fontSize: "95%", marginTop: "20px", display: "block" }}
                className={styles.description}
              >
                {thirukurals[currentIndex].meadning_line}{" "}
                <span
                  style={{
                    color: "var(--grey)",
                    fontSize: "85%",
                    marginLeft: "10px",
                  }}
                >
                  — {thirukurals[currentIndex].exp_name}
                </span>
              </p>
            </div>
          </div>
          <Image
            className={styles.carouselImage}
            width={50}
            height={100}
            src={"/quote.svg"}
            alt={"quote"}
          />
        </div>
      </div>
    </section>
  );
}

export default ThirukuralSlider;
