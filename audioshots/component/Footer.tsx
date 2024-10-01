import React from "react";
import styles from "@/styles/Footer.module.css";
import { Cantarell } from "next/font/google";
import Link from "next/link";

const audio = Cantarell({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={`${styles.main} ${audio.className}`}>
          <div className={styles.A}>
            <div className={styles.logo}>
              <h1 style={{ fontSize: "25px" }}>Audio Shots</h1>
            </div>
            <div className={styles.line}></div>
            <div className={styles.audioShotAbout}>
              <p>
                Weoto is company formed by four enthusiasts to serve businesses
                with their technical expertise. At Weoto, we are on a mission to
                help companies develop competitiveness and agility using the
                software
              </p>
            </div>
          </div>
          <div className={styles.B}>
            <h2 style={{ fontSize: "25px" }}>QUICK LINKS</h2>
            <h4 style={{ fontWeight: 200 }}>Home</h4>
            <h4 style={{ fontWeight: 200 }}>Our Work</h4>
            <h4 style={{ fontWeight: 200 }}>Technologies</h4>
            <h4 style={{ fontWeight: 200 }}>About Us</h4>
            <h4 style={{ fontWeight: 200 }}>Contact Us</h4>
          </div>
          <div className={styles.C}>
            <h2 style={{ fontSize: "25px" }}>SERVICES</h2>
            <h4 style={{ fontWeight: 200 }}>Web Development</h4>
            <h4 style={{ fontWeight: 200 }}>Mobile Development</h4>
            <h4 style={{ fontWeight: 200 }}>E-Commerce</h4>
            <h4 style={{ fontWeight: 200 }}>DevOps</h4>
            <h4 style={{ fontWeight: 200 }}>Blockchain</h4>
          </div>
          <div className={styles.D}>
            <Link legacyBehavior href="./NavComponent/Contact">
              <a style={{ textDecoration: "none" }}>
                <span className={styles.navName}>CONTACT US</span>
              </a>
            </Link>
            <p>
              Weoto Technologies Private Limited, Second Floor, Devshri
              Apartment, Patil Lane No. 4, Behind Hotel Pancham, Nashik - 422005
            </p>
            <h4>Phone: +91-8625888782</h4>
            <h4>Email: contact@weoto.tech</h4>
          </div>
        </div>
        <div className={`${styles.bottomSection} ${audio.className}`}>
          <div className={styles.textLine}></div>
          <div className={styles.copyRights}>
            <p>© Copyright Weoto Technologies Pvt Ltd.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
