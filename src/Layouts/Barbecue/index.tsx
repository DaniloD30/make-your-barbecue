// import LoginForm from "@/components/login/LoginForm";
import styles from "./BarbecueLayout.module.css";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BarbecueLayout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.containerBarbecue}>
        <div className={styles.imageBackground} />
        <div className={styles.contentBarbecue}>
          <div className={styles.title}>Agenda de Churras</div>
          {children}
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
};
export { BarbecueLayout };
