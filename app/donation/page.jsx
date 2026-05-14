import React from "react";
import DonationForm from "../components/DonationForm";
import Image from "next/image";
import styles from "./page.module.css";

function page() {
  return (
    <div className="mt-[60px] md:mt-[4%] mb-[60px] md:mb-[6%]">
      <div className="container">
        <h2 className="text-center mb-8 md:max-w-[40%] mx-auto">
          Support Our Mission: Make a Difference Today
        </h2>
        <div className="">
          <Image
            src={"/donation-banner.png"}
            alt="donate"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <DonationForm />
        <div className="mt-16">
          <div className="container">
            <h3 className="mb-4">Why Donate?</h3>
            <p className="mb-2">
              Your donation helps bring us closer to a healthier future for all.
            </p>

            <p className="flex gap-2 mb-2 2xl:gap-4">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Improving Healthcare Access:</strong> Your support
                enables us to provide medical care to underserved communities,
                breaking down barriers to healthcare and improving lives.
              </span>
            </p>
            <p className="flex gap-2 mb-2 2xl:gap-4">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Supporting Healthcare Professionals:</strong> With your
                help, we empower Tamil healthcare professionals to grow
                professionally and collaborate for a stronger healthcare system.
              </span>
            </p>
            <p className="flex gap-2 mb-2 2xl:gap-4">
              <Image
                src="/tick.svg"
                alt="AtmaChapterSection2"
                width={15}
                height={15}
                quality={100}
                className={styles.tick}
              />
              <span>
                <strong>Fostering Compassionate Service:</strong> Grounded in
                Tamil values of compassion and service, every donation ensures
                we uphold the highest standards of care and community outreach.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
