import Image from "next/image";
import styles from "./NewsHome.module.css";
import Link from "next/link";
import Button from "../Button";

const BoardMemebrs = [
  {
    name: "Bringing Healthcare to Underserved Communities",
    date: "March 01, 2025",
    image: "/home/news/1.webp",
  },
  {
    name: "How ATMA Supports Tamil Students in the Medical Field",
    date: "March 01, 2025",
    image: "/home/news/2.webp",
  },
  {
    name: "Advancements in Telemedicine and Its Impact on Rural Healthcare",
    date: "March 01, 2025",
    image: "/home/news/3.webp",
  },
];

function NewsHome() {
  return (
    <section className={styles.NewsHome}>
      <div className="container">
        <div className={styles.nhRow}>
          <div className={styles.nhCol1}>
            <div className={styles.nhCol1Inner}>
              <p className="font-light tracking-[3px]">NEWS & EVENTS</p>
              <h3>Our Latest News</h3>
              <p>
                Stay informed with the latest updates from the American Tamil
                Medical Association (ATMA).
              </p>
            </div>
          </div>
          <div className={styles.nhCol2}>
            <div className={styles.nhCol2Inner1}>
              <div className="overflow-hidden relative">
                <Image
                  className={`${styles.nhImgMain} transition-transform duration-1000 ease-in-out hover:scale-105`}
                  src="/home/news/main.webp"
                  alt="News"
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
              <p className="mt-2" style={{ color: "var(--grey)" }}>
                March 01, 2025
              </p>
              <h4>The Role of Tamil Physicians in Global Healthcare</h4>
              <p>
                Tamil doctors worldwide are making a significant impact in
                medicine. Learn how their contributions are shaping global
                healthcare standards.
              </p>
              <Link className="mt-2" href="/blogs/medical-association">
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-white)"
                  hoverBgColor="var(--color-white)"
                  hoverTextColor="var(--primary)"
                />
              </Link>
            </div>
            <div className={styles.nhCol2Inner2}>
              {BoardMemebrs.map((bm, index) => (
                <div key={index} className={styles.nhCol2Inner2Inner}>
                  <div className="overflow-hidden relative">
                    <Image
                      className={`${styles.nhImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                      src={bm.image}
                      alt={bm.name}
                      width={300}
                      height={300}
                      quality={100}
                    />
                  </div>
                  <div className={styles.nhCol2Inner2InnerContent}>
                    <p style={{ color: "var(--grey)" }}>{bm.date}</p>
                    <h4>{bm.name}</h4>
                    <Link href="/blogs/medical-association">
                      <Button
                        text="Read More"
                        bgColor="var(--secondary)"
                        color="var(--color-white)"
                        hoverBgColor="var(--color-white)"
                        hoverTextColor="var(--primary)"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHome;
