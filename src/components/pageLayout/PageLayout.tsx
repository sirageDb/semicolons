import React, { ReactNode } from "react";
import styles from "./pagelayout.module.scss";

import Header from "../header/Header";
import Footer from "../footer/Footer";

interface IPageLayoutProps {
  children: ReactNode;
  contentMaxWidth?: number;
}

export default function PageLayout({ children, contentMaxWidth }: IPageLayoutProps): JSX.Element {
  return (
    <div className={styles.mainLayoutContainer}>
      <Header />
      <main style={{ maxWidth: contentMaxWidth && contentMaxWidth }} className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
