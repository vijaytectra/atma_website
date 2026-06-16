import Image from "next/image";
import styles from "./BoardMembers.module.css";
import Link from "next/link";

const BoardMemebrs = [
  // {
  //   name: "Dr Veerappan Sundar, MD",
  //   designation: "ATMA Board Member",
  //   image: "/home/bm/1.jpg",
  //   link: "https://www.linkedin.com/in/veerappan-sundar-06739/",
  // },

  {
    name: "Dr. Einstein Arunachalam, MD",
    designation: "ATMA Board Chairman",
    image: "/home/bm/3.jpg",
    link: "https://www.linkedin.com/in/arunachalam-einstein-16037a87/",
  },
  {
    name: "Dr. Rajammal Jayakumar",
    designation: "ATMA Project Review Committee Chairman",
    image: "/home/bm/president1.jpg",
    link: "#",
  },
  {
    name: "Dr. Ashok Kumar, MD",
    designation: "ATMA Board Member",
    image: "/home/bm/2.jpg",
    link: "#",
  },
  {
    name: "Dr. Ram Raju, MD",
    designation: "ATMA Board Member",
    image: "/home/bm/image-6.jpg",
    link: "https://www.linkedin.com/in/rama-raju-b875781a/",
  },
  {
    name: "Dr. Mythili Bharadwaj, MD",
    designation: "ATMA Board Member",
    image: "/home/bm/mythili.jpg",
    link: "https://www.linkedin.com/in/mythili-bharadwaj-60a155a2/",
  }
  // {
  //   name: "Dr. Parithivel, MD",
  //   designation: "ATMA Board Member",
  //   image: "/home/bm/4.jpg",
  //   link: "#",
  // },

  // {
  //   name: "Dr. Deeptha Nedunchezian, MD",
  //   designation: "ATMA BOARD Member",
  //   image: "/home/bm/6.jpg",
  //   link: "#",
  // },
];
const treasurer = [
  // {
  //   name: "Dr. Nedunchezian Sithian, MD",
  //   designation: "Treasurer ATMA",
  //   image: "/home/bm/5.jpg",
  //   link: "https://www.linkedin.com/in/nedunchezian-sithian-332a73155/",
  // },
  {
    name: "Dr. Meena Krishna, MD",
    designation: "Treasurer ATMA",
    image: "/home/bm/meenaKrishna.jpg",
    link: "",
  }
];
const secretary = [
  // {
  //   name: "Dr. Nedunchezian Sithian, MD",
  //   designation: "Treasurer ATMA",
  //   image: "/home/bm/5.jpg",
  //   link: "https://www.linkedin.com/in/nedunchezian-sithian-332a73155/",
  // },
  {
    name: "Dr. Tillaikarasi Kannappan, MD",
    designation: "Secretary ATMA",
    image: "/home/bm/tillaikarasi.jpg",
    link: "",
  }
];
const governer = [
  {
    name: "Dr. Rajan Dewar, MD",
    designation: "ATMA Governor- Michigan Chapter",
    image: "/home/bm/7.jpg",
    link: "https://www.linkedin.com/in/rajan-dewar-28013120/",
  },
  {
    name: "Dr. Sivaraman Unni, M.D., F.A.C.P., F.A.C.G., A.G.A.F.",
    designation: "ATMA Governor - Baltimore / Greater Washington Chapter",
    image: "/home/bm/8.jpg",
    link: "#",
  },
  // {
  //   name: "Dr. Ram Raju, MD",
  //   designation: "ATMA Governor - New York / New Jersey",
  //   image: "/home/bm/image-6.jpg",
  //   link: "https://www.linkedin.com/in/rama-raju-b875781a/",
  // },
  {
    name: "Dr. Raja Rathinam, MD",
    designation: "ATMA Governor - Western Chapter",
    image: "/home/bm/10.jpg",
    link: "#",
  },
  {
    name: "Dr. Manivannan Verasamy, MD",
    designation: "ATMA Governor - Georgia Chapter",
    image: "/home/bm/11.jpg",
    link: "https://www.linkedin.com/in/manivannan-veerasamy-09454b189/",
  },
  {
    name: "Dr. Priya Ramesh, MD",
    designation: "ATMA Governor - Illinois Chapter",
    image: "/home/bm/12.jpg",
    link: "https://www.linkedin.com/in/priya-ramshesh-31aa461a9/",
  },
  {
    name: "Dr. Karunakaravel, MD",
    designation: "ATMA Governor - Ohio Chapter",
    image: "/home/bm/13.jpg",
    link: "https://www.linkedin.com/in/kk-2009/",
  },
  {
    name: "Dr.Nedunchezhian Sithian,MD",
    designation: "ATMA Governor - \nNew York /  New Jersey Chapter",
    image: "/home/bm/14.png",
    link: "#",
  },
];
function BoardMembers() {
  return (
    <section className={styles.BoardMembers}>
      <div className={`container`}>
        <div className={styles.bmRow}>
          <div className={`${styles.bmCol2} md:flex justify-between`}>
            <div className={`md:w-[60%] relative ${styles.rightBorder}`}>
              <p className="font-light tracking-[3px]">LEADERSHIP</p>
              <h3>Our Board Members</h3>
              <div className="max-w-2xs sm:max-w-full grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-14 mt-8">
                {BoardMemebrs.map((bm, index) => (
                  <div key={index} className={`${styles.bmCol2Inner}`}>
                    <div className={styles.imageFrame}>
                      <Image
                        className={`${styles.bmImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                        src={bm.image}
                        alt={bm.name}
                        width={262}
                        height={285}
                        quality={100}
                      />
                    </div>
                    <h4 className="mt-4">{bm.name}</h4>
                    <p className={styles.designation}>{bm.designation}</p>
                    <div className={styles.bmsocial}>
                      <Link
                        href={bm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/topbar/linkedin.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-[19.1%] mt-8 md:mt-0 ">
              <div>
                <p className="font-light tracking-[3px]">LEADERSHIP</p>
                <h3>Our Treasurer</h3>
                <div className="max-w-2xs sm:max-w-full mt-8">
                  {treasurer.map((bm, index) => (
                    <div key={index} className={`${styles.bmCol2Inner}`}>
                      <div className={styles.imageFrame}>
                        <Image
                          className={`${styles.bmImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                          src={bm.image}
                          alt={bm.name}
                          width={262}
                          height={285}
                          quality={100}
                        />
                      </div>
                      <h4 className="mt-4">{bm.name}</h4>
                      <p className={styles.designation}>{bm.designation}</p>
                      <div className={styles.bmsocial}>
                        <Link
                          href={bm.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/topbar/linkedin.svg"
                            alt="Facebook"
                            width={25}
                            height={25}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="font-light tracking-[3px]">LEADERSHIP</p>
                <h3>Our Secretary</h3>
                <div className="max-w-2xs sm:max-w-full mt-8">
                  {secretary.map((bm, index) => (
                    <div key={index} className={`${styles.bmCol2Inner}`}>
                      <div className={styles.imageFrame}>
                        <Image
                          className={`${styles.bmImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                          src={bm.image}
                          alt={bm.name}
                          width={262}
                          height={285}
                          quality={100}
                        />
                      </div>
                      <h4 className="mt-4">{bm.name}</h4>
                      <p className={styles.designation}>{bm.designation}</p>
                      <div className={styles.bmsocial}>
                        <Link
                          href={bm.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/topbar/linkedin.svg"
                            alt="Facebook"
                            width={25}
                            height={25}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.bmCol2} mt-8`}>
            <div className="">
              <p className="font-light tracking-[3px]">LEADERSHIP</p>
              <h3>Our Governors</h3>
              <div className="max-w-2xs sm:max-w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-14 mt-8">
                {governer.map((bm, index) => (
                  <div key={index} className={`${styles.bmCol2Inner}`}>
                    <div className={styles.imageFrame}>
                      <Image
                        className={`${styles.bmImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                        src={bm.image}
                        alt={bm.name}
                        width={262}
                        height={285}
                        quality={100}
                      />
                    </div>
                    <h4 className="mt-4">{bm.name}</h4>
                    <p className={styles.designation}>{bm.designation}</p>
                    <div className={styles.bmsocial}>
                      <Link
                        href={bm.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/topbar/linkedin.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardMembers;
