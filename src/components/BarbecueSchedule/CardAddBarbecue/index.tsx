import Image from "next/image";
import Icon from "../../../assets/icon_bbq.png";
import Ellipse from "../../../assets/Ellipse.png";
import styles from "./CardAddBarbecue.module.css";
interface Props {
  openModal: () => void;
}
export default function CardAddBarbecue({ openModal }: Props) {
  return (
    <>
      <button className={styles.container} onClick={openModal}>
        <div className={styles.containerIcon}>
          <div>
            <Image src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.containerIconImage}>
            <Image src={Icon} alt="icon" />
          </div>
          <div className={styles.containerText}>
            <h2 className={styles.textCard}>Adicionar Churras</h2>
          </div>
        </div>
      </button>
    </>
  );
}
