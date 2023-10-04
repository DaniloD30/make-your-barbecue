import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import styles from "./Details.module.css";
import CardDetails from "@/components/details/CardDetails/Card";

export default function Details() {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  TODO: Title max width e ellips
  */

  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <CardDetails />
        </div>
      </div>
    </>
  );
}
