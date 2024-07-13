import React, { ReactNode } from "react";
import styles from "./BaseLayout.module.scss";
import Header from "../../header/Header";
import ImageButton from "../../buttons/image-button";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header>
        <ImageButton
          src={"src/assets/Profile.png"}
          alt={""}
          onClick={toEditProfile}
        />
        <ImageButton src={"src/assets/Home.png"} alt={""} onClick={toMain} />
        <span className={styles.container}>
          <ImageButton
            src={"src/assets/Logout.png"}
            alt={""}
            onClick={exit}
          />
        </span>
      </Header>
      {children}
    </div>
  );
};

export default BaseLayout;

function toEditProfile() {
  window.location.href = "/edit_profile";
}

function toMain() {
  window.location.href = "/";
}

function exit(){
  window.location.href = '/start';
}
