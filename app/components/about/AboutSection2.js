import Image from "next/image";
import styles from "./AboutSection2.module.css";

function AboutSection2() {
  return (
    <section className={styles.AboutSection2}>
      <div className="container">
        <div className={styles.AboutSection2Row}>
          <div className={styles.AboutSection2Col}>
            <h3>Our Journey: Building Unity and Impact</h3>

            <div className={styles.numberBox}>
              <h3>01</h3>
              <div>
                <h4 className="mb-1">The Beginning</h4>
                <p className="text-left">
                  ATMA was founded to build meaningful partnerships with
                  organizations that share our vision of advancing healthcare
                  access and supporting Tamil communities worldwide.
                </p>
              </div>
            </div>
            <div className={styles.numberBox}>
              <h3>02</h3>
              <div>
                <h4 className="mb-1">Our Growth</h4>
                <p className="text-left">
                  We unite American Tamil physicians and allied healthcare
                  professionals under one platform to foster fellowship,
                  collaboration, and collective impact.
                </p>
              </div>
            </div>
            <div className={styles.numberBox}>
              <h3>03</h3>
              <div>
                <h4 className="mb-1">Our Present Mission</h4>
                <p className="text-left">
                  We provide a space for our members to grow personally and
                  professionally while upholding our cultural, social, and
                  educational heritage. Through conventions, charitable work,
                  and community outreach, ATMA continues to be a beacon of
                  service and unity.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.AboutSection2Col2}>
            <Image
              src="/about/about1.png"
              alt="About"
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

export default AboutSection2;
