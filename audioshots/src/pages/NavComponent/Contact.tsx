import React, { useRef } from "react";
import styles from "@/styles/Contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Cantarell } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const audio = Cantarell({
weight: "400",
subsets: ["latin"],
preload: true,
});

const Contact = () => {
const card = useRef(null);

useGSAP(() => {
    gsap.from(card.current, {
    y: 500,
    scale: 0.5,
    duration: 0.5,
    delay: 0.2,
    });
});
return (
    <>
    <div className={`${styles.main} ${audio.className}`}>
        <div ref={card} className={styles.card}>
        <div className={styles.leftCard}>
            <h2 style={{ lineHeight: "0px", fontSize: "20px" }}>
            <span style={{ color: "white" }}>
                <LocationOnIcon />
            </span>
            Address
            </h2>
            <p style={{ paddingLeft: "2rem" }}>
            Weoto Technologies Pvt. Ltd. First floor, Padmanabh, Godawari
            Nagar, Pujya Sri Sri Ravishankar Marg, Kalpataru Nagar, Nashik,
            Maharashtra 422001
            </p>
            <h2 style={{ lineHeight: "0px", fontSize: "20px" }}>
            <span style={{ color: "white" }}>
                <EmailIcon />
            </span>{" "}
            Email
            </h2>
            <p style={{ paddingLeft: "2rem" }}>contact@weoto.tech</p>
            <h2 style={{ lineHeight: "0px", fontSize: "20px" }}>
            <span style={{ color: "white" }}>
                <PhoneIcon />
            </span>{" "}
            Let's Talk
            </h2>
            <p style={{ paddingLeft: "2rem" }}>+91-8625888782</p>
        </div>
        <div className={styles.rightCard}>
            <div className={styles.heading}>
            <h1 style={{ fontWeight: 500 }}>Contact Us</h1>
            <h2 style={{ fontWeight: 100 }}>Need more details? Let's talk</h2>
            </div>
            <div className={styles.formContainer}>
            <form action="#">
                <input
                className={styles.text}
                type="text"
                placeholder="Your Name"
                required
                />
                <input
                className={styles.text}
                type="email"
                placeholder="Your Email"
                required
                />
                <input
                className={styles.text}
                type="text"
                placeholder="Subject"
                required
                />
                <textarea
                className={styles.text}
                placeholder="Message"
                rows={5}
                required
                ></textarea>
                <button className={styles.btn} type="submit">
                Send Message
                </button>
            </form>
            </div>
        </div>
        </div>
        <div className={styles.iPhone}>
            <img src="Assets/iPhoneImg.png" alt="" />
        </div>
    </div>
    </>
);
};

export default Contact;
