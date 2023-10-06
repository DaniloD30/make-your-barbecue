import Image from "next/image";
import IconMoney from "../../../assets/icon_money.svg";
import IconPeople from "../../../assets/icon_people.svg";
import styles from "./Card.module.css";
import { PropsScheduled } from "@/interfaces/barbecue";
import { formatDate } from "@/utils";
import { useBarbecue } from "@/contexts/BarbecueContext";

export default function Card({ date, title, qtPeople, price }: PropsScheduled) {
  const { openCardDetail } = useBarbecue();
  /*
  TODO: Agenda de churras é um componente, pq se repete na login LAYOUT
  */
  return (
    <>
      <button
        className={styles.cardContainer}
        onClick={() =>
          openCardDetail({
            date: date,
            title: title,
            qtPeople: qtPeople,
            price: price,
          })
        }
      >
        <div className={styles.containerTitlesCards}>
          <div className={styles.date}>{formatDate(date)}</div>
          <div className={styles.titleCard}>{title}</div>
        </div>

        <div className={styles.containerIcons}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={IconPeople} alt="icon-people" />
            <div className={styles.textsIcons}>{qtPeople}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={IconMoney} alt="icon-people" />
            <div className={styles.textsIcons}>R${price}</div>
          </div>
        </div>
      </button>
    </>
  );
}
