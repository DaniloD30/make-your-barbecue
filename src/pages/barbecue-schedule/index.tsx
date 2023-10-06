import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import styles from "./BarbecueSchedule.module.css";
import Card from "@/components/barbecueSchedule/Card";
import CardAddBarbecue from "@/components/barbecueSchedule/CardAddBarbecue";
import Modal from "@/components/barbecueSchedule/Modal";
import { useState } from "react";
import FormAddBarbecue from "@/components/barbecueSchedule/FormAddBarbecue";
import { PropsScheduled } from "@/interfaces/barbecue";
import { useBarbecue } from "@/contexts/BarbecueContext";

export default function BarbecueSchedule() {
  const [isOpen, setisOpen] = useState(false);
  const { scheduled } = useBarbecue();
  //O login tem que estar no contexto, para garantir o acesso a rota
  // Por somente quem logou

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <div className={styles.card}>
            <CardAddBarbecue openModal={toggle} />
            {scheduled && scheduled.length > 0
              ? scheduled.map((item, index) => (
                  <Card
                    id={item.id}
                    key={`${item.date}-${item.title}-${index}`}
                    date={item.date}
                    title={item.title}
                    qtPeople={item.qtPeople}
                    price={item.price}
                  />
                ))
              : null}
          </div>
        </div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <FormAddBarbecue toggle={toggle} />
        </Modal>
      </div>
    </>
  );
}
