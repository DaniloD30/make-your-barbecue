import { BarbecueLayout } from "@/Layouts/Barbecue";
import Card from "@/components/BarbecueSchedule/Card";
import CardAddBarbecue from "@/components/BarbecueSchedule/CardAddBarbecue";
import FormAddBarbecue from "@/components/BarbecueSchedule/FormAddBarbecue";
import Modal from "@/components/BarbecueSchedule/Modal";
import styles from "./BarbecueSchedule.module.css";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useModal } from "@/contexts/ModalContext";
import { useLogin } from "@/contexts/LoginContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BarbecueSchedule = () => {
  const { scheduled } = useBarbecue();
  const { toggle, isOpen } = useModal();
  const router = useRouter();
  const { user } = useLogin();

  useEffect(() => {
    if (user.email === "") {
      router.push("/");
    }
  }, [user, router]);

  /* 
  TODO:      
        Testes únitarios
        Intalação das libs de test       
  */

  return (
    <>
      <BarbecueLayout>
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
      </BarbecueLayout>
      <Modal isOpen={isOpen} toggle={toggle}>
        <FormAddBarbecue toggle={toggle} />
      </Modal>
    </>
  );
};

export default BarbecueSchedule;
