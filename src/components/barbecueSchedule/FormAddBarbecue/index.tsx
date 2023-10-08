import styles from "./FormAddBarbecue.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorField from "@/components/ErrorField";
import { useBarbecue } from "@/contexts/BarbecueContext";
import uuid from "react-uuid";
const schema = z.object({
  id: z.string(),
  date: z.coerce
    .date()
    .min(new Date(), {
      message: "Date cannot go past",
    })
    .max(new Date(2023, 12, 31)),
  title: z.string().min(1, { message: "Required" }),
  qtPeople: z.string().min(1, { message: "Required" }),
  price: z.string().min(1, { message: "Required" }),
  guests: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      payed: z.boolean(),
      price: z.string(),
      suggestedValueBeer: z.boolean(),
    })
  ),
  suggestedValueBeer: z.string().min(1, { message: "Required" }),
});

interface Props {
  toggle: () => void;
}

type FormDataProps = z.infer<typeof schema>;

export default function FormAddBarbecue({ toggle }: Props) {
  const { handleAdd } = useBarbecue();
  const {
    handleSubmit,
    register,
    
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      id: uuid(),
      date: new Date(),
      title: "",
      qtPeople: "0",
      suggestedValueBeer: "",
      price: "0",
      guests: [],
    },
  });

  const handleSubmitForm = (data: FormDataProps) => {
    handleAdd(data);
    toggle();
  };

  const disabledButtonAdd = (): boolean => {
    return (
      Boolean(errors.date) ||
      Boolean(errors.title) ||
      Boolean(errors.suggestedValueBeer)
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
              placeholder="Nome do churras"
              maxLength={255}
            />
            {errors.title && <ErrorField errorMessage={errors.title.message} />}
          </div>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("suggestedValueBeer")}
              placeholder="Valor sugerido para bebida"
              className={styles.inputStyle}
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
            />
            {errors.suggestedValueBeer && <ErrorField errorMessage={errors.suggestedValueBeer.message} />}
          </div>
          <div className={styles.containerButton}>
            <button
              disabled={disabledButtonAdd()}
              type="submit"
              className={styles.buttonLogin}
            >
              Criar evento
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
