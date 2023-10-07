import LoginForm from "@/components/login/LoginForm";
import styles from "./LoginLayout.module.css";
import Image from "next/image";

export default function LoginLayout() {
  return (
    <>
      <div className={styles.containerLogin}>
        <div className={styles.contentLogin}>
          <div className={styles.title}>Agenda de Churras</div>
          <LoginForm />
          <div className={styles.footerLogin}>
            <Image
              src="/images/trinca.svg"
              alt="Trinca Logo"
              width={48}
              height={48}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
