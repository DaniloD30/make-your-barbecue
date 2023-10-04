import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import IconMoney from "../../assets/icon_money.svg";
import IconPeople from "../../assets/icon_people.svg";
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
            <Card />
            <Card />
            <Card /> 
            <Card />
            <Card />
            <CardAddBarbecue />
          </div>
        </div>
      </div>
    </>
  );
}
