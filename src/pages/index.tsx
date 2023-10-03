import Image from "next/image";
import background from "../assets/backgroundBarbecue1.png";
import styles from "../styles/Login.module.css";
export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <div className={styles.form}>
            <form>
              <div className={styles.inputLoginAndPass}>
                <label className={styles.labelInput}>Login</label>
                <input className={styles.inputStyle} placeholder="e-mail" />
              </div>
              <div className={styles.inputLoginAndPass}>
                <label className={styles.labelInput}>Senha</label>
                <input className={styles.inputStyle} placeholder="senha" />
              </div>
              <div className={styles.containerButton}>
                <button className={styles.buttonLogin}>Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
