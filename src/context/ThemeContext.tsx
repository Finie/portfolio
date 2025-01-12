/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "use-local-storage";

interface DarkModeContextType {
  isDarkMode: "light" | "dark";
  setIsDarkMode: Dispatch<SetStateAction<"light" | "dark">>;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  //@ts-ignore
  const [isDarkMode, setIsDarkMode] = useState<"light" | "dark">(theme);

  const updateTheme = useCallback(() => {
    setTheme(isDarkMode);
  }, [isDarkMode, setTheme]);

  useEffect(() => {
    updateTheme();
  }, [updateTheme]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useThemeStyleContext = () => {
  const context = useContext(DarkModeContext);

  if (context == null) {
    throw new Error(
      "useThemeStyleContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
