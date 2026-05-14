import Image from "next/image";
import styles from "./AtmaChapterSection2.module.css";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection2() {
  return (
    <section className={styles.AtmaChapterSection2}>
      <div className="container">
        <div className={styles.AtmaChapterSection2Row}>
          <div className={styles.AtmaChapterSection2Col}>
            <h3>
              Expanding ATMA’s Impact: Strengthening Chapters for a Healthier
              Future{" "}
            </h3>
            <p>
              ATMA aims to expand its reach by strengthening its chapters across
              the country. By building a strong network of Tamil medical
              professionals, we are working towards:
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

                <span>Empowering communities with better healthcare</span>
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
                  Encouraging knowledge exchange among doctors and healthcare
                  experts
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
                  Offering training and workshops for upcoming medical
                  professionals
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
                  Supporting underprivileged individuals through medical aid
                  programs
                </span>
              </p>
            </div>
            <p>
              Through these initiatives, ATMA ensures that its mission continues
              to impact lives, one chapter at a time.
            </p>
            <Link href="/about-us">
              <Button
                text="View More"
                bgColor="var(--secondary)"
                color="var(--color-white)"
                hoverBgColor="var(--color-white)"
                hoverTextColor="var(--primary)"
              />
            </Link>
          </div>
          <div className={styles.AtmaChapterSection2Col2}>
            <Image
              className={styles.AtmaChapterSection2Img}
              src="/atmac/2.png"
              alt="AtmaChapterSection2"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtmaChapterSection2;
