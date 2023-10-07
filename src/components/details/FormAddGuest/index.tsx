import styles from "./FormAddGuest.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsScheduled } from "@/interfaces/barbecue";
import ErrorField from "@/components/ErrorField";
import { useBarbecue } from "@/contexts/BarbecueContext";
import uuid from "react-uuid";
import { useModal } from "@/contexts/ModalContext";
import { useEffect } from "react";

const schema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Required" }),
  payed: z.boolean(),
  price: z.string().min(1, { message: "Required" }),
  suggestedValueBeer: z.boolean(),
});

type FormDataProps = z.infer<typeof schema>;

export default function FormAddGuest() {
  const { toggle } = useModal();
  const { barbecueDetail, addGuestToEvent } = useBarbecue();

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
      name: "",
      payed: false,
      price: "",
      suggestedValueBeer: false,
    },
  });

  const handleSubmitForm = (data: FormDataProps) => {
    addGuestToEvent(barbecueDetail ? barbecueDetail.id : "0", data);
    toggle();
  };

  const disabledButtonAdd = (): boolean => {
    return (
      Boolean(errors.name) || Boolean(errors.payed) || Boolean(errors.price)
    );
  };

  const suggestValue = () => {
    if (barbecueDetail && barbecueDetail) {
      if (barbecueDetail.price && barbecueDetail.qtPeople) {
        return +barbecueDetail.price / +barbecueDetail.qtPeople;
      }
    }
  };

  return (
    <>
      <div>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <p className={styles.labelInput}>
            Adicione as informações para adicionar um convidado!
          </p>
          <div className={styles.inputLoginAndPass}>
            <input
              {...register("name")}
              type="text"
              className={styles.inputStyle}
              placeholder="Name"
              maxLength={255}
            />
            {errors.name && <ErrorField errorMessage={errors.name.message} />}
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
          <div>
            <div className={styles.inputLoginAndPass}>
              <label>
                Adicionar valor sugerido da bebida?{" "}
                {`R$ ${barbecueDetail?.suggestedValueBeer}`}
              </label>
              <input
                {...register("suggestedValueBeer")}
                type="checkbox"
              />
            </div>
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
