import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Projects from "../pages/projects";

import HumburgerMenu from "./humburger/HumburgerMenu";
import styles from "./menu.module.css";
import BackgroundOverlay from "./overlay";
import SideBar from "./sidebar";
import { useHumburgerContext } from "./context/HumburgerContext";

export default function MenuComponent() {
  const { isOpen } = useHumburgerContext();

  return (
    <>
      <HumburgerMenu />
      <div className={`${styles.sideBar} ${!isOpen ? styles.hidden : ""}`}>
        <SideBar />
      </div>

      <div className={styles.mainContentArea}>
        <BackgroundOverlay />
        <AnimatePresence mode={"wait"}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
