import { ReactNode } from "react";
import style from "./Modal.module.css";
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={style.modalOverlay} onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className={style.modalBox}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
