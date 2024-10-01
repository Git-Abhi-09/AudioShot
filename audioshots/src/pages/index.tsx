import React, { useRef } from "react";
import styles from "@/styles/Home.module.css";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import {Cantarell} from "next/font/google";
import Footer from "@/component/Footer";
import Link from 'next/link';
import Contact from "./NavComponent/Contact";
import ListIcon from '@mui/icons-material/List';

const audio = Cantarell({
  weight:"400",
  subsets: ['latin'],
  preload: true,
});


const Index = () => {
  const i = useRef(null);
  const logo = useRef(null);
  const homeText = useRef(null);

  var tl = gsap.timeline();
  useGSAP(()=>{
    tl.from(logo.current,{
      opacity:0,
      y:-100,
      scale:0.5,
      duration:0.5,
      delay:0.2
    })
    tl.from("a",{
      opacity:0,
      scale:0.5,
      y:-100,
      duration:0.2,
      stagger:0.2
    })
    tl.from("button",{
      opacity:0,
      scale:0.5,
      y:-100,
      duration:0.2,
      stagger:0.2
    })
    // tl.from(homeText.current,{
    //   opacity:0,
    //   scale:0.5,
    //   x:-300,
    //   duration:0.2
    // })
    tl.from(i.current,{
      opacity:0,
      y:500,
      scale:0.5,
      delay:0.2,
      duration:1
    },"<")
  })
  return (
    <>
      <div className={`${styles.page1} ${audio.className}`}>
        <div className={styles.Navbar}>
          <div ref={logo} className={styles.logo}>
            <img
              src="Assets/images-removebg-preview.png"
              height={"50vh"}
              width={"50vw"}
              alt="logo"
            />
          </div>
          <div className={styles.tag}>
            <Link legacyBehavior  href="#">
            <a style={{textDecoration:"none"}}>
              <span className={styles.navName}>Home</span>
            </a>
            </Link>
            <Link legacyBehavior href="#">
            <a style={{textDecoration:"none"}}>
              <span className={styles.navName}>Features</span>
            </a>
            </Link>
            <Link legacyBehavior href="#">
            <a style={{textDecoration:"none"}}>
              <span className={styles.navName}>About</span>
            </a>
            </Link>
            <Link legacyBehavior href="./NavComponent/Contact">
            <a style={{textDecoration:"none"}}>
              <span className={styles.navName}>Contact</span>
            </a>
            </Link>
          </div>
          <div className={styles.downloadBtn}>
            <button className={`${styles.btn} ${audio.className}`}>DOWNLOAD</button>
          </div>
        </div>
        <div className={styles.responsiveNav}>
         <ListIcon className={styles.listIcon}/>
        <div ref={logo} className={styles.logo}>
            <img
              src="Assets/images-removebg-preview.png"
              height={"35vh"}
              width={"35vw"}
              alt="logo"
            />
            </div>
            <div className={styles.downloadBtn}>
            <button className={`${styles.btn} ${audio.className}`}>DOWNLOAD</button>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.leftText}>
            <h1 ref={homeText} className={`${styles.h1} ${audio.className} `}>"Your <span style={{color:"white"}}>♫⋆</span> music,your way.Anytime, anywhere."</h1>
          </div>
          <div className={styles.centerImg}>
            <img ref={i} src="Assets/audio_shots-removebg.png" alt="mobile" />
          </div>
          <div className={styles.rightText}>
            <div className={styles.followInfo}>
              <div className={styles.activeUser}>
              <h3 style={{fontWeight:100 , lineHeight:"1px"}}>Active Users</h3>
              <h1>50000+
              </h1>
              </div>
              <div className={styles.totalDownload}>
              <h3 style={{fontWeight:100 , lineHeight:"1px"}}>Downloads</h3>
              <h1>10M</h1>
              </div>

            </div>
            <p style={{fontSize:"1.2rem" , fontWeight:100}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur aspernatur dolorem tempora cupiditate neque, dolores
              similique, magnam perferendis quidem, blanditiis nam dignissimos
              repudiandae unde reprehenderit aliquid aliquam soluta provident
              facere.
            </p>
            <h3 style={{fontWeight:1000 , lineHeight:"0px" ,margin:0}}>Download App Now</h3>
            <div className={styles.appInfo}>
              <div className={styles.appleStore}>
                <img src="Assets/appStore-removebg-preview.png"  alt="" />

              </div>
              <div className={styles.palyStrore}>
                <img src="Assets/play-removebg-preview.png"  alt="" />
              </div>
            </div>
          </div>
        </div>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Index;
