import Image from "next/image";
import IconPeople from "../../../../assets/icon_people.svg";
import IconMoney from "../../../../assets/icon_money.svg";
import styles from "./CardDetails.module.css";
import RowDetail from "../../RowDetail";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { formatDate } from "@/utils";

export default function CardDetails() {
  const { barbecueDetail } = useBarbecue();

  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  TODO: Title max width e ellips
  TODO: Button adicionar novo convidade
        Nome, checked, filter by id, se o estado do barbecue ficar no contexto
        não vou precisar filtrar, ja que ele vai ter um array de convidados
        e todas vez que eu adicionar
  */

  return (
    <>
      <div className={styles.cardDetail}>
        <div className={styles.rowDetail}>
          <div className={styles.customText}>
            {formatDate(
              barbecueDetail?.date ? barbecueDetail.date : new Date()
            )}
          </div>
          <div
            style={{
              display: "flex",
              marginRight: "63px",
            }}
          >
            <Image src={IconPeople} alt="icon-people" />
            <div className={styles.textsIcons}>{barbecueDetail?.qtPeople}</div>
          </div>
        </div>
        <div className={styles.rowDetail}>
          <div className={styles.customTextTitle}>{barbecueDetail?.title}</div>
          <div
            style={{
              display: "flex",
              marginRight: "20px",
            }}
          >
            <Image src={IconMoney} alt="icon-people" />
            <div className={styles.textsIcons}>R${barbecueDetail?.price}</div>
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
