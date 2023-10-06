import { Guests } from "@/interfaces/barbecue";
import styles from "./RowDetail.module.css";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useEffect } from "react";

interface Props {
  guest: Guests;
  indexGuest: number;
  indexBarbecue: number;
}
export default function RowDetail({ guest, indexGuest, indexBarbecue }: Props) {
  const { markGuestAsPayed } = useBarbecue();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <label className={styles.container}>
            <input
              className={styles.checkBoxNone}
              type="checkbox"
              checked={guest.payed}
              onChange={() => markGuestAsPayed(indexBarbecue, indexGuest)}
            />
            <span className={styles.checkmark} />
          </label>
          <h3
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Raleway",
              fontSize: "21px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              marginLeft: "30px",
            }}
          >
            {guest.name}
          </h3>
        </div>
        <div>
          <h3
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Raleway",
              fontSize: "21px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            R$ {guest.price}
          </h3>
        </div>
      </div>
      <hr
        style={{
          height: "2px",
          opacity: "0.5",
          marginTop: "10px",
          border: "none",
          background: "#E5C231",
        }}
      />
    </>
  );
}
