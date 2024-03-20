// "use client";
// import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {
//   ssr: false,
// });
const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);
  return (
    <div className={styles.conatiner}>
      <div className={styles.imgConatiner}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.fromConatiner}>
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optinal)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
