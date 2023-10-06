import styles from "./ErrorField.module.css";

interface Props {
  errorMessage: string | undefined;
}

export default function ErrorField({ errorMessage }: Props) {
  return (
    <>
      <p className={styles.errorField}>{errorMessage}</p>
    </>
  );
}
