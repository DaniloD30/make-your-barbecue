import styles from "./RowDetail.module.css";
export default function RowDetail() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px"
        }}
      >
        <div style={{ display: "flex" }}>
          <label className={styles.container}>
            <input
              className={styles.checkBoxNone}
              type="checkbox"
            />
            <span className={styles.checkmark} />
          </label>
          <h3
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Raleway",
              fontSize: "21px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              marginLeft: '30px'
            }}
          >
            Alice
          </h3>
        </div>
        <div>
          <h3
            style={{
              color: "rgba(0, 0, 0, 0.80)",
              fontFamily: "Raleway",
              fontSize: "21px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            R$ 20,00
          </h3>
        </div>
      </div>
      <hr
        style={{
          height: "2px",
          opacity: "0.5",
          marginTop: "10px",
          border: "none",
          background: "#E5C231",
        }}
      />
    </>
  );
}
