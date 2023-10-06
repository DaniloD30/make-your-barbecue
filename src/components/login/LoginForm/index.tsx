import styles from "./Login.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import ErrorField from "@/components/ErrorField";

const schema = z.object({
  email: z.string().email("Invalid e-mail"),
  pass: z.string().min(8, "At least 8 characters"),
});

export default function LoginForm() {
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

  const handleSubmitForm = () => {
    return router.push("/barbecue-schedule");
  };

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.inputLoginAndPass}>
            <label className={styles.labelInput}>Login</label>
            <input
              {...register("email")}
              type="text"
              className={styles.inputStyle}
              placeholder="e-mail"
              maxLength={255}
            />

            {errors.email && <ErrorField errorMessage={errors.email.message} />}
          </div>
          <div className={styles.inputLoginAndPass}>
            <label className={styles.labelInput}>Password</label>
            <input
              {...register("pass")}
              type="password"
              className={styles.inputStyle}
              placeholder="senha"
              maxLength={255}
            />
            {errors.pass && <ErrorField errorMessage={errors.pass.message} />}
          </div>
          <div className={styles.containerButton}>
            <button
              disabled={
                Boolean(errors.email?.message) || Boolean(errors.pass?.message)
              }
              type="submit"
              className={styles.buttonLogin}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
