import Image from "next/image";
import styles from "./BlogInnerPage.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import SidebarBlog from "./SidebarBlog";

function BlogInnerPage() {
  return (
    <section className={styles.BlogInnerPage}>
      <div className="container">
        <div className={styles.BlogInnerPageRow}>
          <div className={styles.BlogInnerPageCol}>
            <Image
              className={styles.BlogInnerPageImg}
              src="/gallery/21.jpg"
              alt="Blog"
              width={300}
              height={300}
            />
            <div className={styles.BlogInnerAuthor}>
              <p className={styles.flexCol}>
                <FaUserAlt size={20} color="var(--primary)" />{" "}
                <span>ATMA USA</span>
              </p>
              <p className={styles.flexCol}>
                <MdOutlineDateRange color="var(--primary)" />
                <span>05, Dec 2023</span>
              </p>
            </div>
            <h3>Medical Association: Uniting Tamil Healthcare Professionals</h3>
            <p className={styles.quote}>
              <sup>
                <RiDoubleQuotesL size={20} />
              </sup>
              <span>
                Medical associations play a crucial role in advancing healthcare
                by supporting medical professionals, fostering collaboration,
                and providing essential services to communities. ATMA, a global
                Tamil medical association, is dedicated to empowering healthcare
                professionals and improving access to quality medical care.
              </span>
              <sub style={{ display: "flex", alignItems: "flex-end" }}>
                <RiDoubleQuotesR size={20} />
              </sub>
            </p>
            <h3>The Role of Medical Associations</h3>
            <p>
              Medical associations contribute significantly to the healthcare
              sector through:
            </p>
            <div className={styles.imageColumn}>
              <div>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Professional development via conferences & training.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Networking opportunities for medical professionals.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>Support for aspiring medical students.</span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Community outreach programs and free medical camps.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>Encouraging research and knowledge sharing.</span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>Mental health awareness and support programs.</span>
                </p>
              </div>
              <Image
                className={styles.BlogInnerPageImg}
                src="/gallery/18.jpg"
                alt="Blog"
                width={300}
                height={300}
              />
            </div>
            <h3 className="mt-8">ATMA’s Key Initiatives</h3>
            <p>
              ATMA supports Tamil medical students with scholarships,
              mentorship, and career guidance. The association also conducts
              free health camps in underserved areas, promotes medical research,
              and fosters professional networking to enhance career growth.
            </p>
            <h3>How You Can Get Involved</h3>
            <p>
              Whether you&apos;re a healthcare professional, student, or someone
              passionate about improving healthcare, you can contribute by
              joining ATMA, volunteering for medical initiatives, mentoring
              students, or supporting healthcare outreach programs.
            </p>
            <p>
              ATMA continues to work toward building a strong network of Tamil
              healthcare professionals dedicated to global medical advancements
              and community service.
            </p>
          </div>
          <div className={styles.BlogInnerPageCol2}>
            <SidebarBlog />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogInnerPage;
