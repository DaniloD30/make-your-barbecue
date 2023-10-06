import Image from "next/image";
import IconMoney from "../../../assets/icon_money.svg";
import IconPeople from "../../../assets/icon_people.svg";
import styles from "./Card.module.css";
import { PropsScheduled } from "@/interfaces/barbecue";
import { formatDate } from "@/utils";

export default function Card({ date, title, qtPeople, price }: PropsScheduled) {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  TODO: title card tem que ter max width e ellipsis no texto para não ultrapassar
  TODO: A parte do dinheiro tem que ter máscara
  */
  return (
    <>
      <div className={styles.cardContainer}>
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
      </div>
    </>
  );
}
