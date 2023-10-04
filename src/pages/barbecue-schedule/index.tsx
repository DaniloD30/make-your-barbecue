import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import styles from "./BarbecueSchedule.module.css";
import Card from "@/components/barbecueSchedule/Card";
import CardAddBarbecue from "@/components/barbecueSchedule/CardAddBarbecue";
export default function BarbecueSchedule() {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  */
  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <div className={styles.card}>
            <CardAddBarbecue />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
