import React, { ReactNode } from "react";
import styles from "./pagelayout.module.scss";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import backgroundLine from "../../assets/backgroundLine.svg";


interface IPageLayoutProps {
  children: ReactNode;
  contentMaxWidth?: number;
}

export default function PageLayout({ children, contentMaxWidth }: IPageLayoutProps): JSX.Element {
  return (
    <div className={styles.mainLayoutContainer} style={{backgroundImage: `url(${backgroundLine})` }}>
      <Header />
      <main style={{ maxWidth: contentMaxWidth && contentMaxWidth}} className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
