import Image from "next/image";
import styles from "./AtmaChapterSection3.module.css";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection3() {
  return (
    <section className={styles.AtmaChapterSection2}>
      <div className="container">
        <div className={styles.AtmaChapterSection2Row}>
          <div className={styles.AtmaChapterSection2Col2}>
            <Image
              className={styles.AtmaChapterSection2Img}
              src="/atmac/3.png"
              alt="AtmaChapterSection2"
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className={styles.AtmaChapterSection2Col}>
            <h3>Our Growth and Community Impact</h3>
            <p>
              ATMA chapters serve as a bridge between healthcare professionals
              and communities in need. Our growth is fueled by:
            </p>
            <div className={styles.checkBoxAtmac}>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>Strong leadership within each chapter</span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  A network of dedicated volunteers and medical professionals
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Continuous community engagement through events and health
                  drives
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Collaboration with hospitals, NGOs, and local organizations
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Free medical camps and health screenings for underserved
                  populations
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Educational workshops on disease prevention and healthy living
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Scholarships and mentorship programs for aspiring medical
                  students
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Disaster relief initiatives providing medical aid during
                  emergencies
                </span>
              </p>
              <p>
                <Image
                  src="/tick.svg"
                  alt="AtmaChapterSection2"
                  width={15}
                  height={15}
                  quality={100}
                />
                <span>
                  Advocacy for public health policies and improved healthcare
                  access
                </span>
              </p>
            </div>
            <p>
              With every chapter we establish, we are one step closer to making
              healthcare accessible and ensuring no community is left behind.
            </p>
            {/* <Link href="/about-us">
              <Button
                text="View More"
                bgColor="var(--secondary)"
                color="var(--color-black)"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtmaChapterSection3;
