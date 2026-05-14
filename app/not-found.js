import styles from "./NotFound.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link href="/" className={styles.homeLink}>
        Go Back to Home
      </Link>
    </div>
  );
}
