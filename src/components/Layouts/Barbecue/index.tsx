import LoginForm from "@/components/login/LoginForm";
import styles from "./BarbecueLayout.module.css";
import Image from "next/image";
import Card from "@/components/barbecueSchedule/Card";
import CardAddBarbecue from "@/components/barbecueSchedule/CardAddBarbecue";
import FormAddBarbecue from "@/components/barbecueSchedule/FormAddBarbecue";
import Modal from "@/components/barbecueSchedule/Modal";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useModal } from "@/contexts/ModalContext";

export default function BarbecueLayout() {
  const { scheduled } = useBarbecue();
  const { toggle, isOpen } = useModal();
  return (
    <>
      <div className={styles.containerBarbecue}>
        <div className={styles.imageBackground}/>
        <div className={styles.contentBarbecue}>
          <div className={styles.title}>Agenda de Churras</div>
          <div className={styles.card}>
            <CardAddBarbecue openModal={toggle} />
            {scheduled && scheduled.length > 0
              ? scheduled.map((item, index) => (
                  <Card
                    id={item.id}
                    key={`${item.date}-${item.title}-${index}`}
                    date={item.date}
                    title={item.title}
                    guests={item.guests}
                    suggestedValueBeer={item.suggestedValueBeer}
                    qtPeople={item.qtPeople}
                    price={item.price}
                  />
                ))
              : null}
          </div>
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
      <Modal isOpen={isOpen} toggle={toggle}>
          <FormAddBarbecue toggle={toggle} />
        </Modal>
    </>
  );
}
