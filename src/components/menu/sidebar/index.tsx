import styles from "./sidebar.module.css";
import { useHumburgerContext } from "../context/HumburgerContext";
import { Link, useLocation } from "react-router-dom";

import IcComputer from "../../../assets/illustration_computer_bro.svg";
import DarkIcComputer from "../../../assets/dark_ic_computer_bro.svg";
import NightDayMode from "../animated/NightDayMode";
import { useThemeStyleContext } from "../../../context/ThemeContext";
import Text from "../../output/text/Text";

import packageJson from "../../../../package.json"; // Adjust path as necessary

export default function SideBar() {
  const { isOpen, setIsOpen } = useHumburgerContext();
  const { isDarkMode } = useThemeStyleContext();

  const location = useLocation();

  return (
    <div
      className={`${styles.sideBarContainer} ${
        isOpen ? styles.openSideBarContainer : ""
      }`}
    >
      <div className={`${styles.sidebar}  ${isOpen ? styles.openSidebar : ""}`}>
        <div className={`${styles.topContainer}`}>
          {isDarkMode === "dark" ? (
            <DarkIcComputer
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              style={{ width: "200px", height: "200px" }}
            />
          ) : (
            <IcComputer
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
        <div className={`${styles.medianContainer}`}>
          <aside className={`${styles.asidebar}`}>
            <nav className={`${styles.navigation}`}>
              <ul>
                <li
                  className={`${
                    location.pathname === "/" ? styles.active : styles.inactive
                  }`}
                >
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Text
                      type={"body-bold"}
                      style={{
                        lineHeight: "3em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        letterSpacing: "0.2em",
                        display: "block",
                        transition: "all ease-out 300ms",
                      }}
                    >
                      Welcome
                    </Text>
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/about"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  <Link to={"/about"} style={{ textDecoration: "none" }}>
                    <Text
                      style={{
                        lineHeight: "3em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        letterSpacing: "0.2em",
                        display: "block",
                        transition: "all ease-out 300ms",
                      }}
                      type={"body-bold"}
                    >
                      Who We Are
                    </Text>
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/projects"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  <Link to={"/projects"} style={{ textDecoration: "none" }}>
                    <Text
                      style={{
                        lineHeight: "3em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        letterSpacing: "0.2em",
                        display: "block",
                        transition: "all ease-out 300ms",
                      }}
                      type={"body-bold"}
                    >
                      What We Do
                    </Text>
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/contact"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://khnxhqqcjw8.typeform.com/to/N5PsRK1x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text
                      style={{
                        lineHeight: "3em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        letterSpacing: "0.2em",
                        display: "block",
                        transition: "all ease-out 300ms",
                      }}
                      type={"body-bold"}
                    >
                      Get In Touch
                    </Text>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
        <div className={`${styles.bottomContainer}`}>
          <NightDayMode />
          <Text
            style={{ color: isDarkMode === "dark" ? "white" : "black" }}
            type={"caption"}
          >{`Viewing Mode [ ${
            isDarkMode === "dark" ? "Dark" : "Light"
          } ]`}</Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            type={"caption"}
            style={{ fontSize: 12 }}
          >{`Version Code [ ${packageJson.version} ]`}</Text>
        </div>
      </div>
    </div>
  );
}
