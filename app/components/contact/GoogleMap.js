// components/GoogleMap.js
import Styles from "./Googlemap.module.css";

const GoogleMap = () => {
  return (
    <div className={Styles.gmap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52951380.76239253!2d-161.96768271336356!3d35.90056765452582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1747974821080!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
