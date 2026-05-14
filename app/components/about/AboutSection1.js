import Image from "next/image";
import styles from "./AboutSection1.module.css";
import Link from "next/link";
import Button from "../Button";

function AboutSection1() {
  return (
    <section className={styles.AboutSection1}>
      <div className="container">
        <div className={styles.AboutSection1Row}>
          <div className={styles.AboutSection1Col}>
            <div className={styles.AboutSection1ColInner}>
              <div className="overflow-hidden relative">
                <Image
                  className={`${styles.AboutSection1ColInner1Img} transition-transform duration-1000 ease-in-out hover:scale-105`}
                  src="/about/about.png"
                  alt="About"
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.AboutSection1ColInner2}>
              {/* <p>ABOUT US</p> */}
              <h3>About Us</h3>
              <p className="text-left">
                The American Tamil Medical Association (ATMA) is a nonprofit
                organization founded to unite Tamil healthcare professionals
                across the United States. With over 800 members, ATMA serves as
                a platform for medical professionals to collaborate, share
                knowledge, and contribute to global healthcare improvements. Our
                mission is to provide accessible healthcare to underserved
                communities through medical camps, health awareness programs,
                and charitable outreach. We are committed to advancing medical
                education and supporting Tamil communities globally. Through
                annual conventions, professional networking, and humanitarian
                initiatives, ATMA fosters a strong sense of unity and purpose
                among Tamil medical professionals. Our charitable arm, ATMA-CF,
                extends our impact by funding scholarships, medical supplies,
                and disaster relief efforts, ensuring that healthcare reaches
                those who need it most. At ATMA, we believe in combining
                professional excellence with social responsibility to create a
                lasting impact in the field of healthcare.
              </p>
              <Link className="mt-2" href="/contact">
                <Button
                  text="Get In Touch"
                  bgColor="var(--secondary)"
                  color="var(--color-white)"
                  hoverBgColor="var(--btn-hover)"
                  hoverTextColor="var(--primary)"
                />
              </Link>
            </div>
          </div>
          <div className={styles.AboutSection1Col2}>
            <h3>
              Empowering Healthcare, <br></br>Embracing Heritage
            </h3>
            <p className="text-left">
              The Association was founded with a mission to unite Tamil
              healthcare professionals and leverage their expertise to improve
              healthcare access globally. Beyond organizing medical camps and
              health awareness programs, ATMA actively supports disaster relief
              efforts and funds essential medical resources. The association
              serves as a vital networking hub, providing professional
              development opportunities and fostering a strong sense of
              community. Through its charitable foundation (ATMA-CF), the
              organization extends its reach by supporting hospitals, offering
              scholarships, and ensuring sustainable healthcare improvements in
              Tamil Nadu and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
