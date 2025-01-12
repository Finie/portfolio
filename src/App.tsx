import styles from "./app.module.css";
import "./App.css";

import { useThemeStyleContext } from "./context/ThemeContext";
import MenuComponent from "./components/menu";

function App() {
  const { isDarkMode } = useThemeStyleContext();

  return (
    <div className={styles.app} data-theme={isDarkMode}>
      <MenuComponent />
    </div>
  );
}

export default App;
