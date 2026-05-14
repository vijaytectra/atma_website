import Link from "next/link";
import styles from "./TopBar.module.css";
import Image from "next/image";

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className="container">
        <div className={styles.topbarContent}>
          <p>
            Call us: <Link href="tel:13124645000">+1 213-545-4695</Link> |{" "}
            <Link href="mailto:info@atmausa.com">info@atmausa.com</Link>
          </p>
          <div className={styles.socialTopbar}>
            <p>Follow Us:</p>
            <div className={styles.socialIcons}>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/topbar/fb.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/topbar/insta.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/topbar/twitter.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@americantamilmedicalassoci4502"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/topbar/yt.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
