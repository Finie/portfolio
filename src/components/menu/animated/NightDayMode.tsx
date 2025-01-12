import { animated, useSpring } from "react-spring";
import { useThemeStyleContext } from "src/context/ThemeContext";

export default function NightDayMode() {
  const { isDarkMode, setIsDarkMode } = useThemeStyleContext();

  const properties = {
    dark: {
      r: 9,
      transform: "rotate(45deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 6,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } =
    properties[isDarkMode === "dark" ? "dark" : "light"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });

  const centerCircleProps = useSpring({ r, config: properties.springConfig });

  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });

  const linesProps = useSpring({ opacity, config: properties.springConfig });

  const onToggleDarkMode = () => {
    setIsDarkMode((previous) => (previous === "light" ? "dark" : "light"));
  };

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="36" // Increased size
      height="36" // Increased size
      viewBox="0 0 24 24"
      fill="none"
      stroke={isDarkMode === "dark" ? "white" : "orange"}
      strokeWidth="2" // Corrected camelCase for stroke-width
      strokeLinecap="round" // Corrected camelCase for stroke-linecap
      strokeLinejoin="round" // Corrected camelCase for stroke-linejoin
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
      onClick={onToggleDarkMode}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />

        <animated.circle
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          style={maskedCircleProps}
          r="9"
          fill={"black"}
        />
      </mask>

      <animated.circle
        fill={isDarkMode === "dark" ? "white" : "orange"}
        cx="12"
        cy="12"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        style={centerCircleProps}
        mask="url(#mask)"
      />
      <animated.g stroke="orange" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
}
