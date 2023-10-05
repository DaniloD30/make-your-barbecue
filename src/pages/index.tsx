import Image from "next/image";
import background from "../assets/backgroundBarbecue1.png";
import styles from "../styles/Login.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

const schema = z.object({
  email: z.string().email("Invalid e-mail"),
  pass: z.string().min(8, "At least 8 characters"),
});

export default function Login() {
  /* 
  TODO: Icone trinca
  */
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      pass: "",
    },
  });

  const handleSubmitForm = (data) => {
    return router.push("/barbecue-schedule");
  };

  return (
    <>
      <div className={styles.container}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.containerName}>
          <div className={styles.name}>Agenda de Churras</div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <div className={styles.inputLoginAndPass}>
                <label className={styles.labelInput}>Login</label>
                <input
                  {...register("email")}
                  type="text"
                  className={styles.inputStyle}
                  placeholder="e-mail"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className={styles.inputLoginAndPass}>
                <label className={styles.labelInput}>Senha</label>
                <input
                  {...register("pass")}
                  type="password"
                  className={styles.inputStyle}
                  placeholder="senha"
                />
                {errors.pass && <p>{errors.pass.message}</p>}
              </div>
              <div className={styles.containerButton}>
                <button
                  disabled={
                    Boolean(errors.email?.message) ||
                    Boolean(errors.pass?.message)
                  }
                  type="submit"
                  className={styles.buttonLogin}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
