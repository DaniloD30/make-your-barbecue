import styles from "./FormAddBarbecue.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsScheduled } from "@/interfaces/barbecue";
import ErrorField from "@/components/ErrorField";

const schema = z.object({
  date: z.coerce
    .date()
    .min(new Date(), {
      message: "Date cannot go past",
    })
    .max(new Date(2023, 12, 31)),
  title: z.string().min(1, { message: "Required" }),
  qtPeople: z.string().min(1, { message: "Required" }),
  price: z.string().min(1, { message: "Required" }),
});

interface Props {
  handleAdd: (obj: PropsScheduled) => void;
  toggle: () => void;
}

type FormDataProps = z.infer<typeof schema>;

export default function FormAddBarbecue({ handleAdd, toggle }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
      title: "",
      qtPeople: "",
      price: "",
    },
  });

  const handleSubmitForm = (data: FormDataProps) => {
    // return router.push("/barbecue-schedule");
    handleAdd(data);
    toggle();
  };

  const disabledButtonAdd = (): boolean => {
    return (
      Boolean(errors.date) ||
      Boolean(errors.title) ||
      Boolean(errors.qtPeople) ||
      Boolean(errors.price)
    );
  };

  return (
    <>
      <div>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <p className={styles.labelInput}>
            Adicione as informações para agendar seu churras!
          </p>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("date")}
              type="date"
              className={styles.inputStyle}
              max={`${new Date().getFullYear()}-12-31`}
              min={`2023-01-01`}
              placeholder="Date of barbecue"
            />
            {errors.date && <ErrorField errorMessage={errors.date.message} />}
          </div>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("title")}
              type="text"
              className={styles.inputStyle}
              placeholder="Name"
              maxLength={255}
            />
            {errors.title && <ErrorField errorMessage={errors.title.message} />}
          </div>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("qtPeople")}
              type="number"
              className={styles.inputStyle}
              placeholder="Quantity People"
            />
            {errors.qtPeople && (
              <ErrorField errorMessage={errors.qtPeople.message} />
            )}
          </div>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("price")}
              placeholder="Price"
              className={styles.inputStyle}
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
            />
            {errors.price && <ErrorField errorMessage={errors.price.message} />}
          </div>
          <div className={styles.containerButton}>
            <button
              disabled={disabledButtonAdd()}
              type="submit"
              className={styles.buttonLogin}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
