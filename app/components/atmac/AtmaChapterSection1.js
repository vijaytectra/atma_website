import Image from "next/image";
import styles from "./AtmaChapterSection1.module.css";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection1() {
  return (
    <section className={styles.AtmaChapterSection1}>
      <div className="container">
        <div className="mb-own flex flex-col md:flex-row gap-4 md:gap-8">
          <h3 className="md:min-w-[35%]">
            A Celebration of Knowledge, Culture, and Community
          </h3>
          <p>
            The American Tamil Medical Association (ATMA) has established
            multiple chapters across the United States to strengthen its network
            and broaden its impact. Each chapter serves as a local hub where
            Tamil healthcare professionals can connect, collaborate, and
            contribute to community health initiatives.
          </p>
        </div>
        <div className={styles.AtmaChapterSection1Row}>
          <div className={styles.AtmaChapterSection1Col}>
            <Image
              src="/atmac/1.png"
              alt="Chapter"
              width={600}
              height={600}
              quality={100}
            />
          </div>
          <div className={styles.AtmaChapterSection1Col2}>
            <h3>
              Empowering Communities Through 20+ Years of Medical Outreach and
              Education
            </h3>
            <p>
              For over 20 years, ATMA has been committed to uplifting
              communities through medical outreach, education, and professional
              support. Our chapters play a vital role in driving this mission
              forward by organizing free health check-up camps, raising
              awareness about preventive healthcare, and supporting local
              hospitals with essential resources. Additionally, we provide
              scholarships and mentorship to medical students, ensuring the next
              generation of healthcare professionals is well-equipped to serve
              the community.
            </p>
            {/* <div className={styles.iconBoxAtmac}>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/1.svg" alt="icon" width={50} height={50} />
                <h4>Vision/Mission</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/2.svg" alt="icon" width={50} height={50} />
                <h4>Our Growth</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/3.svg" alt="icon" width={50} height={50} />
                <h4>Charitable Activity</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/4.svg" alt="icon" width={50} height={50} />
                <h4>National and International</h4>
              </div>
            </div> */}
            {/* <Link href="/">
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

export default AtmaChapterSection1;
