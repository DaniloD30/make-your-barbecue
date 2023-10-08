import styles from "./Logout.module.css";
import Image from "next/image";
import { useLogin } from "../../contexts/LoginContext";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const { handleSetUser } = useLogin();
  const router = useRouter();

  const logout = () => {
    handleSetUser({ email: "", pass: "" });
    router.push("/");
  };

  return (
    <>
      <div
        data-testid="button-logout"
        onClick={() => logout()}
        className={styles.containerButton}
      >
        <Image
          src={"/images/icon-logout.png"}
          width={24}
          height={24}
          alt="logout-icon"
        />
        <div className={styles.textButton}>Sair</div>
      </div>
    </>
  );
};
export { LogoutButton };
