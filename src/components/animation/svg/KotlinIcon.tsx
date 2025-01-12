import styles from "./kotlin.module.css";

export default function KotlinIcon() {
  return (
    <svg
      width="70px"
      height="70px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className={styles.kotlinSvgComponent}
    >
      <defs>
        <linearGradient
          x1="26.599%"
          y1="146.559136%"
          x2="73.8446667%"
          y2="52.3813953%"
          id="linearGradient-1"
        >
          <stop className={styles.stopColorOne} offset="9.677%"></stop>
          <stop className={styles.stopColorTwo} offset="30.07%"></stop>
          <stop className={styles.stopColorThree} offset="62.11%"></stop>
          <stop className={styles.stopColorFour} offset="86.43%"></stop>
          <stop className={styles.stopColorFive} offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="13.9840532%"
          y1="37.1049231%"
          x2="68.682392%"
          y2="-13.5538462%"
          id="linearGradient-2"
        >
          <stop className={styles.stopColorSix} offset="11.83%"></stop>
          <stop className={styles.stopColorSeven} offset="41.78%"></stop>
          <stop className={styles.stopColorEight} offset="69.62%"></stop>
          <stop className={styles.stopColorNine} offset="83.33%"></stop>
        </linearGradient>
        <linearGradient
          x1="-16.8361667%"
          y1="91.9396667%"
          x2="76.2191667%"
          y2="-1.11566667%"
          id="linearGradient-3"
        >
          <stop className={styles.stopColorTen} offset="10.75%"></stop>
          <stop className={styles.stopColorEleven} offset="21.38%"></stop>
          <stop className={styles.stopColorTwelve} offset="42.54%"></stop>
          <stop className={styles.stopColorThirteen} offset="60.48%"></stop>
          <stop className={styles.stopColorFourteen} offset="74.3%"></stop>
          <stop className={styles.stopColorFivteen} offset="82.32%"></stop>
        </linearGradient>
      </defs>
      <g>
        <polygon
          fill="url(#linearGradient-1)"
          points="0 256 128.426667 127.573333 256 256"
        ></polygon>
        <polygon
          fill="url(#linearGradient-2)"
          points="0 0 128.426667 0 0 138.666667"
        ></polygon>
        <polygon
          fill="url(#linearGradient-3)"
          points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0"
        ></polygon>
      </g>
    </svg>
  );
}
