import Image from "next/image";
import background from "../../assets/backgroundBarbecue-mid.png";
import styles from "./Details.module.css";
import CardDetails from "@/components/details/CardDetails/Card";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useModal } from "@/contexts/ModalContext";
import Modal from "@/components/barbecueSchedule/Modal";
import FormAddBarbecue from "@/components/barbecueSchedule/FormAddBarbecue";
import FormAddGuest from "@/components/details/FormAddGuest";

export default function Details() {
  const { barbecueDetail } = useBarbecue();
  const router = useRouter();
  const { toggle, isOpen } = useModal();
  useEffect(() => {
    if (barbecueDetail?.title === "") {
      router.push("/barbecue-schedule");
    }
  }, [barbecueDetail, router]);
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
        <Modal isOpen={isOpen} toggle={toggle}>
          <FormAddGuest/>
        </Modal>
      </div>
    </>
  );
}
