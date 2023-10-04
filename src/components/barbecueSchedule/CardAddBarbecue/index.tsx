import Image from "next/image";
import Icon from "../../../assets/icon_bbq.png";
import Ellipse from "../../../assets/Ellipse.png";
import styles from "./CardAddBarbecue.module.css";

export default function CardAddBarbecue() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerIcon}>
          <div>
            <Image src={Ellipse} alt="ellipse" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <Image src={Icon} alt="icon" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              marginTop: "50%",
            }}
          >
            <h2 className={styles.textCard}>Adicionar Churras</h2>
          </div>
        </div>
      </div>
    </>
  );
}
