import Image from "next/image";
import background from "../assets/backgroundBarbecue1.png";
import styles from "../styles/Home.module.css";
import LoginForm from "@/components/login/LoginForm";

export default function Login() {
  /* 
  TODO: Icone trinca
  */

  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
