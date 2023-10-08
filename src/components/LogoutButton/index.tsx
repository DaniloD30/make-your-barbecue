import styles from "./Logout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLogin } from "@/contexts/LoginContext";
import IconLogout from "../../assets/icons8-logout-48.png";

const LogoutButton = () => {
  const { handleSetUser } = useLogin();
  const router = useRouter();

  const logout = () => {
    handleSetUser({ email: "", pass: "" });
    router.push("/");
  };

  return (
    <>
      <div onClick={() => logout()} className={styles.containerButton}>
        <Image src={IconLogout} alt="logout-icon" />
        <div className={styles.textButton}>Logout</div>
      </div>
    </>
  );
};
export { LogoutButton };
