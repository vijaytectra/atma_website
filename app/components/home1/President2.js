import Image from "next/image";
import styles from "./President2.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol2}>
            <p className="font-light tracking-[3px]" style={{color: '#cf1941'}} >OUR MESSAGE</p>
            <h3 className="mb-4" style={{fontWeight: 'bold'}}>
              ATMA in Action: Service, Support & the Road Ahead
            </h3>
            <div className={styles.presidentName}>
              <h4><strong>Dr. Kabilan Dharmarajan</strong></h4>
              <p><strong>President, ATMA</strong></p>
            </div>
            <div style={{background: '#cf1941', padding: '30px'}}>
              <p className="mt-2 italic ml-2" style={{color: '#ffffff'}}>Chair of internal medicine </p>
              <p className="italic ml-2" style={{color: '#ffffff'}}>Associate professor of medicine</p>
              <p className="italic ml-2" style={{color: '#ffffff'}}>
                Lowell General Hospital/ TUFTS university
              </p>
            </div>
            <p className="mt-4 text-left">
              It is an honor to serve this vibrant community of compassionate
              Tamil healthcare professionals. Together, we will continue to
              expand our charitable impact and celebrate our shared heritage. I
              look forward to working with each of you to take ATMA to greater
              heights.
            </p>
          </div>
          <div className={styles.presidentCol2}>
            <div className="overflow-hidden relative">
              <Image
                className="hidden md:block transition-transform duration-1000 ease-in-out hover:scale-105"
                src="/home/bm/president2.png"
                alt="President"
                width={500}
                height={500}
                quality={100}
              />
              <Image
                className="md:hidden transition-transform duration-1000 ease-in-out hover:scale-105"
                src="/home/bm/president2.jpg"
                alt="President"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default President;
