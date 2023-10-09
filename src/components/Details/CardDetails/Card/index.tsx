import Image from "next/image";
import styles from "./CardDetails.module.css";
import RowDetail from "../../RowDetail";
import { useBarbecue } from "../../../../contexts/BarbecueContext";
import { formatDate } from "../../../../utils";
import { useModal } from "../../../../contexts/ModalContext";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function CardDetails() {
  const { barbecueDetail, scheduled } = useBarbecue();
  const { toggle } = useModal();
  const router = useRouter();

  const barbecueArrayIndex = useCallback(() => {
    if (barbecueDetail && scheduled) {
      return scheduled.findIndex((item) => item.id === barbecueDetail?.id);
    }
    return 0;
  }, [barbecueDetail, scheduled]);

  return (
    <>
      <div className={styles.cardDetail}>
        <div className={styles.comeBack}>
          <button
            className={styles.buttonComeBack}
            onClick={() => router.push("/barbecue-schedule")}
          >
            <Image
              src={"/images/icon-back.png"}
              width={24}
              height={24}
              alt="icon-back"
            />
            Voltar
          </button>
        </div>
        <div className={styles.rowDetail}>
          <div className={styles.customText}>
            {formatDate(
              barbecueDetail?.date ? barbecueDetail.date : new Date()
            )}
          </div>
          <div className={styles.containerIcon}>
            <Image
              src={"/images/icon-people.svg"}
              width={18}
              height={18}
              alt="icon-people" 
            />
            <div className={styles.textsIcons}>{barbecueDetail?.qtPeople}</div>
          </div>
        </div>
        <div className={styles.rowDetail}>
          <div className={styles.customTextTitle}>{barbecueDetail?.title}</div>
          <div className={styles.containerIconMoney}>
            <Image
              src={"/images/icon-money.svg"}
              width={18}
              height={18}
              alt="icon-money"
            />
            <div className={styles.textsIcons}>R${barbecueDetail?.price}</div>
          </div>
        </div>
        <div className={styles.rowAddButton}>
          <button className={styles.buttonAdd} onClick={toggle}>
            <Image
              src={"/images/icon-add.png"}
              width={18}
              height={18}
              alt="icon-add"
            />
            Adicionar participante do churras!
          </button>
        </div>
        <div className={styles.rowDetailContainer}>
          {barbecueDetail &&
            barbecueDetail.guests.map((itemGuest, indexGuest) => (
              <RowDetail
                key={itemGuest.id}
                guest={itemGuest}
                indexBarbecue={barbecueArrayIndex()}
                indexGuest={indexGuest}
              />
            ))}
        </div>
      </div>
    </>
  );
}
