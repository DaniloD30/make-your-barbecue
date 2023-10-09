import Image from "next/image";
import styles from "./Card.module.css";
import { PropsScheduled } from "../../../interfaces/Barbecue";
import { formatDate } from "../../../utils";
import { useBarbecue } from "../../../contexts/BarbecueContext";

export default function Card({
  date,
  title,
  qtPeople,
  price,
  id,
  suggestedValueBeer,
  guests,
}: PropsScheduled) {
  const { openCardDetail } = useBarbecue();
 
  return (
    <>
      <button
        className={styles.cardContainer}
        onClick={() =>
          openCardDetail({
            id: id,
            date: date,
            title: title,
            qtPeople: qtPeople,
            suggestedValueBeer: suggestedValueBeer,
            guests: guests,
            price: price,
          })
        }
      >
        <div className={styles.containerTitlesCards}>
          <div className={styles.date}>{formatDate(date)}</div>
          <div className={styles.titleCard}>{title}</div>
        </div>

        <div className={styles.containerIcons}>
          <div className={styles.alignDiv}>
            <Image
              src={"/images/icon-people.svg"}
              width={18}
              height={18}
              alt="icon-people"
            />
            <div className={styles.textsIcons}>{qtPeople}</div>
          </div>
          <div  className={styles.alignDiv}>
            <Image
              src={"/images/icon-money.svg"}
              width={18}
              height={18}
              alt="icon-money"
            />
            <div className={styles.textsIcons}>R${price}</div>
          </div>
        </div>
      </button>
    </>
  );
}
