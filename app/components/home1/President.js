import Image from "next/image";
import styles from "./President.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol1}>
            <div className="overflow-hidden relative">
              <Image
                src="/home/bm/president.jpg"
                alt="President"
                width={500}
                height={500}
                quality={100}
                className="transition-transform duration-1000 ease-in-out hover:scale-105"
              />
            </div>
            <div className={styles.bannerRed}>
              <h6>Service to Humanity is Service to God</h6>
              <Image
                className="absolute -top-4 !w-6 left-4 !h-auto shadow-lg"
                src={"/quote1.svg"}
                alt="quote"
                width={50}
                height={42}
              />
            </div>
          </div>
          <div className={styles.presidentCol2}>
            <p className="font-light tracking-[3px]">OUR MESSAGE</p>
            <h3>Strength in Service: A Message from the President</h3>
            <div className={styles.presidentName}>
              <h4><strong>Dr. Rajammal Jayakumar</strong></h4>
              <p><strong>Past President of ATMA</strong></p>
            </div>
            <p className="text-left">
              As you all know all our members are doing a lot of charitable
              works. At include a few of them, Dr. Kabilan and Dr. Einstein are
              doing many projects, the BLS (Basic Life Support) is very
              important one. ATMA has sponsored artificial limbs, wheelchairs,
              and walking sticks to Leprosy people in Dharmapuri district.
            </p>
            <p className="text-left">
              As ATMA member and president, I did conduct BLS in two schools
              (Total of 100 students from 10th to 12th grade), sponsored for 50
              cataract surgeries in Salem Eye Hospital in 2023.
            </p>
            <p className="text-left">
              I request all members to report their charitable medically related
              work to ATMA (ATMA President or Board Chair). If anyone has any
              important project, please present it to the Project Committee well
              ahead, so that they can discuss and approve it.
            </p>
            <p className="text-left">
              Now we are in the process of conducting ATMA Convention, which is
              conducted once in two years. This year, it will be held in Fresno,
              California, from August 22 to 24, 2025. Please try to attend the
              convention and pass on the message to your ATMA friends. I wish
              this convention would be a very successful one, with all your
              cooperation.
            </p>
            <p>Thanks for all your charitable work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default President;
