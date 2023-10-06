import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import styles from "./BarbecueSchedule.module.css";
import Card from "@/components/barbecueSchedule/Card";
import CardAddBarbecue from "@/components/barbecueSchedule/CardAddBarbecue";
import Modal from "@/components/barbecueSchedule/Modal";
import { useState } from "react";
export default function BarbecueSchedule() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
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
            <CardAddBarbecue openModal={toggle} />
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
        <Modal isOpen={isOpen} toggle={toggle}>
          <div>Yaay!!! Our Modal is rendered Properly.</div>
        </Modal>
      </div>
    </>
  );
}
