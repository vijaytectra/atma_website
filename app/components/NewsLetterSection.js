import React from "react";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer.module.css";

function NewsLetterSection() {
  return (
    <section className={styles.nesletterSection}>
      <div className="container">
        <div className={styles.footerRow1}>
          <div>
            <h3 className="!text-white">
              Join with us, subscribe our newsletter
            </h3>
            <p className="mt-2 !text-white">
              Stay connected with ATMA! Subscribe to our newsletter for the
              latest updates on medical initiatives, community outreach, and
              professional opportunities.
            </p>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterSection;
