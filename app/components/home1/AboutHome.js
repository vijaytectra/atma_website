import Image from "next/image";
import styles from "./AboutHome.module.css";
import Button from "../Button";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Link from "next/link";

function AboutHome() {
  return (
    <section className={styles.AboutHome}>
      <div className="container">
        <div className={styles.ahRow1}>
          <h3 className="mb-8">Become a volunteer</h3>
          <div className={styles.ahInnerRow}>
            <div className={styles.ahCol}>
              <p>
                Contribute your time and skills to deliver medical aid and
                health education to underserved communities, creating a real
                impact on lives.
              </p>
            </div>
            <div className={styles.ahCol}>
              <p>
                Gain valuable experience, network with healthcare professionals,
                and enhance your medical knowledge through hands-on
                participation and training.
              </p>
            </div>
            <div className={styles.ahCol}>
              <p>
                Join a passionate network of Tamil healthcare professionals
                united by the mission to improve global healthcare and support
                Tamil heritage.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ahRow2}>
          <div className={styles.ahRow2Col}>
            <div className={styles.ahRow2ColInner}>
              <div className={styles.ahRow2ColInnerTitle}>
                <p className="font-light tracking-[3px]">ABOUT US</p>
                <h3>Empowering Healthcare, Embracing Heritage</h3>
              </div>
              <div className={styles.ahRow2ColInnerContent}>
                <p
                  className="!text-[#6D6D6D]"
                  style={{ display: "flex", alignItems: "baseline" }}
                >
                  <sup style={{ marginRight: "10px", width: "85px" }}>
                    <RiDoubleQuotesL size={25} color="#a4a4a4" />
                  </sup>
                  <span className="text-left">
                    The compassion of a Tamilian knows no bounds; what began as
                    a small effort in America has now united hundreds of medical
                    professionals, becoming a pillar of humanity. Our knowledge
                    and care must always serve as noble acts that give life to
                    the underserved.
                  </span>
                </p>
                <p className="flex !text-[#6D6D6D]">
                  - ATMA
                  <sub style={{ marginLeft: "10px" }}>
                    <RiDoubleQuotesR size={15} color="#a4a4a4" />
                  </sub>
                </p>
              </div>
            </div>
            <p className="text-left">
              In January, 2005, a group of ten Tamil physicians in the United
              States established the American Tamil Medical Association (ATMA).
              Now there are more than 800 physicians and allied healthcare
              professionals as members and the membership is growing. It is a
              501(c) 3, IRS tax exempt, charitable organization.
            </p>
            <Link href="/about-us">
              <Button
                text="Know More"
                bgColor="var(--secondary)"
                color="var(--color-white)"
                hoverBgColor="var(--btn-hover)"
                hoverTextColor="var(--primary)"
              />
            </Link>
          </div>
          <div className={styles.ahRow2Col}>
            <div className="overflow-hidden relative">
              <Image
                src="/home/about-new.png"
                alt="about"
                width={500}
                height={500}
                quality={100}
                className="transition-transform duration-1000 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
