import Image from "next/image";
import styles from "./SidebarBlog.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Link from "next/link";

function SidebarBlog() {
  return (
    <section className={styles.SidebarBlog}>
      <div className={styles.sidebarMainRow}>
        <h3>Latest Blogs</h3>
        <div className={styles.sidebarRow}>
          <div className={styles.sidebarCol}>
            <Image src="/gallery/19.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>05, Feb 2025</span>
                </p>
              </div>
              <Link href="/">
                <h4>
                  ATMA’s Annual Convention: What to Expect and How to Join
                </h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/20.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>06, Feb 2025</span>
                </p>
              </div>
              <Link href="/">
                <h4>
                  Networking for Medical Professionals: Why It’s Important
                </h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/21.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>08, Feb 2025</span>
                </p>
              </div>
              <Link href="/">
                <h4>
                  Mental Health Awareness: Breaking the Stigma in Tamil
                  Communities
                </h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/22.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>12, Feb 2025</span>
                </p>
              </div>
              <Link href="/">
                <h4>Emergency Medical Aid: ATMA’s Role in Disaster Relief</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarBlog;
