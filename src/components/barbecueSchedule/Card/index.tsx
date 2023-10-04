import Image from "next/image";
import IconMoney from "../../../assets/icon_money.svg";
import IconPeople from "../../../assets/icon_people.svg";
import styles from "./Card.module.css";
export default function Card() {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  */
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.containerTitlesCards}>
          <div className={styles.date}>01/13</div>
          <div className={styles.titleCard}>Niver do Gui</div>
        </div>

        <div className={styles.containerIcons}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={IconPeople} alt="icon-people" />
            <div className={styles.textsIcons}>15</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={IconMoney} alt="icon-people" />
            <div className={styles.textsIcons}>R$280</div>
          </div>
        </div>
      </div>
    </>
  );
}
