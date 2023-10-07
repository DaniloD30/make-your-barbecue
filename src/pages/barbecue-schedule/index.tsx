import { BarbecueLayout } from "@/Layouts/Barbecue";
import Card from "@/components/barbecueSchedule/Card";
import CardAddBarbecue from "@/components/barbecueSchedule/CardAddBarbecue";
import FormAddBarbecue from "@/components/barbecueSchedule/FormAddBarbecue";
import Modal from "@/components/barbecueSchedule/Modal";
import styles from "./BarbecueSchedule.module.css";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useModal } from "@/contexts/ModalContext";

const BarbecueSchedule = () => {
  const { scheduled } = useBarbecue();
  const { toggle, isOpen } = useModal();
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
