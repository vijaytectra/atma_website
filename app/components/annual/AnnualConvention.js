import Image from "next/image";
import styles from "./AnnualConvention.module.css";
import Link from "next/link";
import Button from "../Button";

const AnnualData = [
  {
    id: 1,
    title: "Keynote Address: Inspiring Words from Visionary Leaders",
    desc: "Hear from renowned medical experts and pioneers as they share insights on healthcare advancements, industry challenges, and future opportunities in medicine.",
    image: "/annual/1.webp",
    link: "/",
    date: "April 15, 2024",
  },
  {
    id: 2,
    title: "Scientific Research Paper Contest",
    desc: "Participate in ATMA’s first-ever research contest, where professionals and students present cutting-edge medical research shaping the future of healthcare.",
    image: "/annual/2.webp",
    link: "/",
    date: "April 16, 2024",
  },
  {
    id: 3,
    title: "Medical Seminars & Workshops",
    desc: "Engage in specialized medical seminars and hands-on workshops covering emerging technologies and breakthrough treatments in the healthcare industry.",
    image: "/annual/3.webp",
    link: "/",
    date: "April 17, 2024",
  },
  {
    id: 4,
    title: "Networking Sessions: Connect & Collaborate",
    desc: "Build meaningful connections with Tamil healthcare professionals, researchers, and mentors. Exchange ideas and explore new career and collaboration opportunities.",
    image: "/annual/4.webp",
    link: "/",
    date: "April 18, 2024",
  },
  {
    id: 5,
    title: "Panel Discussions & Debates",
    desc: "Join thought-provoking discussions on key healthcare topics, ethical dilemmas, and policy changes shaping the future of medicine and patient care.",
    image: "/annual/5.webp",
    link: "/",
    date: "April 19, 2024",
  },
  {
    id: 6,
    title: "Cultural Extravaganza: Celebrating Tamil Heritage",
    desc: "Experience Tamil culture through music, dance, and theatrical performances, blending tradition with contemporary expression to celebrate our rich heritage.",
    image: "/annual/6.webp",
    link: "/",
    date: "April 20, 2024",
  },
  {
    id: 7,
    title: "Community & Philanthropy Initiatives",
    desc: "ATMA is dedicated to healthcare outreach programs, medical camps, and initiatives improving access to quality healthcare for underserved communities.",
    image: "/annual/7.webp",
    link: "/",
    date: "April 21, 2024",
  },
  {
    id: 8,
    title: "Awards & Recognitions",
    desc: "Celebrate the achievements of outstanding medical professionals and contributors who have made a significant impact in healthcare and community service.",
    image: "/annual/8.webp",
    link: "/",
    date: "April 22, 2024",
  },
  {
    id: 9,
    title: "Grand Gala Dinner & Social Night",
    desc: "Unwind and celebrate with fellow professionals at a memorable gala dinner featuring fine dining, entertainment, and camaraderie in a relaxed setting.",
    image: "/annual/9.webp",
    link: "/",
    date: "April 23, 2024",
  },
];

function AnnualConvention() {
  return (
    <section className={styles.annualConvention}>
      <div className="container">
        <div className="mb-own flex flex-col md:flex-row gap-4 md:gap-8">
          <h3 className="md:min-w-[35%]">
            A Celebration of Knowledge, Culture, and Community
          </h3>
          <p className="text-left">
            The ATMA Annual Convention is a landmark event that unites Tamil
            healthcare professionals across the U.S. and beyond. This gathering
            fosters medical excellence, networking, and cultural pride.
            Attendees engage in expert-led discussions, discover the latest
            advancements in healthcare, and celebrate Tamil heritage through
            vibrant performances. Join us to expand your knowledge, connect with
            pioneers, and be part of a thriving professional community.
          </p>
        </div>
        <div className={styles.annualConventionRow}>
          {AnnualData.map((item) => (
            <div className={styles.annualConventionCol} key={item.id}>
              <div className="overflow-hidden relative">
                <Image
                  className={`${styles.annualConventionImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                  src={item.image}
                  alt="annual"
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
              <h3 className="mt-4">{item.title}</h3>
              <p>{item.desc}</p>
              {/* <Link href={item.link}>
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                />
              </Link> */}
              <p className={styles.date}>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnnualConvention;
