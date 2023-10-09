import Image from "next/image";
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
            {/* <Image src={Ellipse} alt="ellipse" /> */}
            <Image
              src={"/images/ellipse.png"}
              width={90}
              height={90}
              alt="ellipse"
            />
          </div>
          <div className={styles.containerIconImage}>
            {/* <Image src={Icon} alt="icon-bbq" /> */}
            <Image
              src={"/images/icon-bbq.png"}
              width={40}
              height={40}
              alt="icon-bbq"
            />
          </div>
          <div className={styles.containerText}>
            <h2 className={styles.textCard}>Adicionar Churras</h2>
          </div>
        </div>
      </button>
    </>
  );
}
