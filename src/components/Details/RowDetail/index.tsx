import { Guests } from "../../../interfaces/Barbecue";
import styles from "./RowDetail.module.css";
import { useBarbecue } from "../../../contexts/BarbecueContext";
import Image from "next/image";

interface Props {
  guest: Guests;
  indexGuest: number;
  indexBarbecue: number;
}
export default function RowDetail({ guest, indexGuest, indexBarbecue }: Props) {
  const { markGuestAsPayed } = useBarbecue();

  return (
    <>
      <div className={styles.containerRow}>
        <div className={styles.containerCheck}>
          <label className={styles.container}>
            <input
              className={styles.checkBoxNone}
              type="checkbox"
              checked={guest.payed}
              onChange={() => markGuestAsPayed(indexBarbecue, indexGuest)}
            />
            <span className={styles.checkmark} />
          </label>
          <div className={styles.guestName}>{guest.name}</div>
        </div>
        <div>
          <div className={styles.guestPrice}>
            {guest.payed ? <s>R$ {guest.price}</s> : `R$ ${guest.price}`}
            {guest.suggestedValueBeer ? (
              <Image
              src={"/images/icon-beer.png"}
              width={24}
              height={24}
              alt="icon-beer"
            />
            ) : null}
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
}
