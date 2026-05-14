import Image from "next/image";
import styles from "./BlogMain.module.css";
import Link from "next/link";
import Button from "../Button";

const BlogData = [
  {
    id: 1,
    image: "/gallery/18.jpg",
    title: "The Role of Tamil Physicians in Global Healthcare",
    description:
      "Tamil doctors worldwide are making a significant impact in medicine. Learn how their contributions are shaping global healthcare standards.",
    link: "/blogs/medical-association",
    date: "March 10, 2024",
  },
  {
    id: 2,
    image: "/gallery/19.jpg",
    title: "Medical Camps: Bringing Healthcare to Underserved Communities",
    description:
      "ATMA’s medical camps provide essential care to those in need. How these camps are transforming lives and improving health outcomes.",
    link: "/blogs/medical-association",
    date: "March 12, 2024",
  },
  {
    id: 3,
    image: "/gallery/20.jpg",
    title: "The Importance of Preventive Healthcare: What You Need to Know",
    description:
      "Prevention is better than cure! Explore key preventive healthcare tips that can help you lead a healthier life.",
    link: "/blogs/medical-association",
    date: "March 14, 2024",
  },
  {
    id: 4,
    image: "/gallery/21.jpg",
    title: "How ATMA Supports Tamil Students in the Medical Field",
    description:
      "From scholarships to mentorship programs, ATMA is committed to supporting the next generation of Tamil healthcare professionals.",
    link: "/blogs/medical-association",
    date: "March 16, 2024",
  },
  {
    id: 5,
    image: "/gallery/22.jpg",
    title: "Advancements in Telemedicine and Its Impact on Rural Healthcare",
    description:
      "Telemedicine is revolutionizing access to medical care. Find out how this technology is bridging the gap in rural and underserved areas.",
    link: "/blogs/medical-association",
    date: "March 18, 2024",
  },
  {
    id: 6,
    image: "/gallery/23.jpg",
    title: "Emergency Medical Aid: ATMA’s Role in Disaster Relief",
    description:
      "During crises, ATMA steps in with medical aid and disaster relief. Learn about our past efforts and how you can contribute.",
    link: "/blogs/medical-association",
    date: "March 20, 2024",
  },
  {
    id: 7,
    image: "/gallery/24.jpg",
    title: "Mental Health Awareness: Breaking the Stigma in Tamil Communities",
    description:
      "Mental health is just as important as physical health. Read about ATMA’s initiatives to raise awareness and provide mental health support.",
    link: "/blogs/medical-association",
    date: "March 22, 2024",
  },
  {
    id: 8,
    image: "/gallery/25.jpg",
    title: "Networking for Medical Professionals: Why It’s Important",
    description:
      "Building connections in the medical field leads to better opportunities and collaborations. See how ATMA helps Tamil doctors expand their network.",
    link: "/blogs/medical-association",
    date: "March 24, 2024",
  },
  {
    id: 9,
    image: "/gallery/26.jpg",
    title: "ATMA’s Annual Convention: What to Expect and How to Join",
    description:
      "A highlight of the year, ATMA’s annual convention brings professionals together for learning, networking, and community service.",
    link: "/blogs/medical-association",
    date: "March 26, 2024",
  },
];

function BlogMain() {
  return (
    <section className={styles.BlogMain}>
      <div className="container">
        <div className={styles.BlogMainRow}>
          {BlogData.map((item) => (
            <div className={styles.BlogMainCol} key={item.id}>
              <div className="overflow-hidden relative">
                <Image
                  className={`${styles.BlogMainImg} transition-transform duration-1000 ease-in-out hover:scale-105`}
                  src={item.image}
                  alt="Blog"
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
              <p className={`${styles.date} mt-4`}>{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link className={styles.blogBtn} href={item.link}>
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-white)"
                  hoverBgColor="var(--btn-hover)"
                  hoverTextColor="var(--primary)"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogMain;
