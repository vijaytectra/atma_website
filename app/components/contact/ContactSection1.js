import Image from "next/image";
import styles from "./ContactSection1.module.css";
import ContactForm from "./ContactForm";

function ContactSection1() {
  return (
    <section className={styles.contactSection1}>
      <div className="container">
        <div className={styles.contactSection1Row}>
          <div className={styles.contactSection1Col}>
            <Image
              src="/contact.png"
              alt="Contact"
              width={600}
              height={600}
              quality={100}
            />
          </div>
          <div className={styles.contactSection1Col2}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection1;
