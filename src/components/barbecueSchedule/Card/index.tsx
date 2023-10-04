import Image from "next/image";
import IconMoney from "../../../assets/icon_money.svg";
import IconPeople from "../../../assets/icon_people.svg";
import styles from "../../../pages/barbecue-schedule/BarbecueSchedule.module.css";
export default function Card() {
  /*
  TODO: Agenda de churras é um componente, pq se repete na login
  */
  return (
    <>
  
        <div
          style={{
            height: "192px",
            width: "282px",
            borderRadius: "2px",
            background: "#FFF",
            boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div
            style={{
              marginTop: "2%",
              marginLeft: "12%",
            }}
          >
            <div
              style={{
                color: "#000",
                fontFamily: "Raleway",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              01/13
            </div>
            <div
              style={{
                color: "rgba(0, 0, 0, 0.80)",
                fontFamily: "Raleway",
                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Niver do Gui
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "50%",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={IconPeople} alt="icon-people" />
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontSize: "21px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  marginLeft: "10px",
                }}
              >
                15
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={IconMoney} alt="icon-people" />
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  fontSize: "21px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  marginLeft: "10px",
                }}
              >
                R$280
              </div>
            </div>
          </div>
        </div>
  
    </>
  );
}
