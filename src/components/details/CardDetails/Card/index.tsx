import Image from "next/image";
import IconPeople from "../../../../assets/icon_people.svg";
import IconMoney from "../../../../assets/icon_money.svg";
import styles from "./CardDetails.module.css";
import RowDetail from "../../RowDetail";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { formatDate } from "@/utils";
import { useModal } from "@/contexts/ModalContext";

export default function CardDetails() {
  const { barbecueDetail, scheduled } = useBarbecue();
  const { toggle } = useModal();
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  TODO: Title max width e ellips
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
        <div className={styles.rowDetail}>
          <button onClick={toggle}>Add guest</button>
        </div>
        <div
          style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
        >
          {scheduled?.map((item) =>
            item.guests.map((itemGuest) => (
              <RowDetail key={itemGuest.id} guest={itemGuest} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
