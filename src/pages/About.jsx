import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.body} style={{ display: "flex", margin: "20px" }}>
      <div className={styles.main}>
        <img
          src={
            "https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"
          }
          alt="codingSvg"
          className={styles.image}
        />
        <h1
          style={{ marginTop: "2rem", color: "#55D8C1", marginBottom: "2rem" }}
        >
          {" "}
          Hi, &#128075; I'm Mikail
        </h1>
        <h4 style={{ color: "#55D8C1" }}>
          I’m currently learning Full-Stack Development Languages.
        </h4>
        <h4 style={{ color: "#55D8C1" }}>
          I've already known HTML, Css, JavaScript, ReactJS, Django.py. PostreSQL SQL, Linux, Python, Boostrap, MUI, SASS.
        </h4>
        <h4 style={{ color: "#55D8C1" }}>
          <a href="mikaildokgoz@gmail.com" className={styles.anchor2}>
            Send email
          </a>{" "}
          : mikaildokgoz@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default About;
