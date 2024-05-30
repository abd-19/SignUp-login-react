import Image from "next/image";
import styles from "./page.module.css";
import SignUp from "@/app/signUp/page";
import Login from "@/app/login/page";
import Link from "next/link";



let btu = false;

function Home() {
  return (
    <>
    <div className={styles.home}>
      <div className="header">
      <svg id="visual" viewBox="0 0 1920 540" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 450L17.8 441C35.7 432 71.3 414 106.8 400C142.3 386 177.7 376 213.2 355.2C248.7 334.3 284.3 302.7 320 298.7C355.7 294.7 391.3 318.3 426.8 333.8C462.3 349.3 497.7 356.7 533.2 352C568.7 347.3 604.3 330.7 640 300.5C675.7 270.3 711.3 226.7 746.8 232.3C782.3 238 817.7 293 853.2 316.8C888.7 340.7 924.3 333.3 960 338.2C995.7 343 1031.3 360 1066.8 345.7C1102.3 331.3 1137.7 285.7 1173.2 282.3C1208.7 279 1244.3 318 1280 328.3C1315.7 338.7 1351.3 320.3 1386.8 327.3C1422.3 334.3 1457.7 366.7 1493.2 353.3C1528.7 340 1564.3 281 1600 258.5C1635.7 236 1671.3 250 1706.8 277.2C1742.3 304.3 1777.7 344.7 1813.2 363.3C1848.7 382 1884.3 379 1902.2 377.5L1920 376L1920 0L1902.2 0C1884.3 0 1848.7 0 1813.2 0C1777.7 0 1742.3 0 1706.8 0C1671.3 0 1635.7 0 1600 0C1564.3 0 1528.7 0 1493.2 0C1457.7 0 1422.3 0 1386.8 0C1351.3 0 1315.7 0 1280 0C1244.3 0 1208.7 0 1173.2 0C1137.7 0 1102.3 0 1066.8 0C1031.3 0 995.7 0 960 0C924.3 0 888.7 0 853.2 0C817.7 0 782.3 0 746.8 0C711.3 0 675.7 0 640 0C604.3 0 568.7 0 533.2 0C497.7 0 462.3 0 426.8 0C391.3 0 355.7 0 320 0C284.3 0 248.7 0 213.2 0C177.7 0 142.3 0 106.8 0C71.3 0 35.7 0 17.8 0L0 0Z" fill="#D4F1F4" stroke-linecap="round" stroke-linejoin="miter"></path></svg>      </div>
      <div className={styles.body}>
      <h1 id="h1">
        GET STARTED WITH US
      </h1>
      </div>
      <div className={styles.main}>
        <Link href="/signUp" className={styles.link}>Sign Up </Link>
        <Link href="/login" className={styles.link}>login </Link>
      </div>
    </div>
    <div className={styles.footer}>
      <h3>@all copy right are save</h3>
    </div>
    </>
    
);
}


export default Home;