import Image from "next/image";
import background from "../assets/backgroundBarbecue1.png";
import styles from "../styles/Home.module.css";
export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda Churrasco</div>
        </div>
      </div>
    </>
  );
}
