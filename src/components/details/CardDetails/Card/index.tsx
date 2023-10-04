import Image from "next/image";
import IconPeople from "../../../../assets/icon_people.svg";
import IconMoney from "../../../../assets/icon_money.svg";
import styles from "./CardDetails.module.css";
import RowDetail from "../../RowDetail";
export default function CardDetails() {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  TODO: Title max width e ellips
  */

  return (
    <>
      <div className={styles.cardDetail}>
        <div className={styles.rowDetail}>
          <div className={styles.customText}>01/12</div>
          <div
            style={{
              display: "flex",
              marginRight: "63px",
            }}
          >
            <Image src={IconPeople} alt="icon-people" />
            <div className={styles.textsIcons}>15</div>
          </div>
        </div>
        <div className={styles.rowDetail}>
          <div className={styles.customTextTitle}>Niver do Gui</div>
          <div
            style={{
              display: "flex",
              marginRight: "20px",
            }}
          >
            <Image src={IconMoney} alt="icon-people" />
            <div className={styles.textsIcons}>R$280</div>
          </div>
        </div>
        <div
          style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
        >
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
          <RowDetail />
       
        </div>
      </div>
    </>
  );
}
