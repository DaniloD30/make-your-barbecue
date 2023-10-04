import Image from "next/image";
import Icon from "../../../assets/icon_bbq.png";
import Ellipse from "../../../assets/Ellipse.png";
export default function CardAddBarbecue() {
  return (
    <>
      <div
        style={{
          height: "192px",
          width: "282px",
          borderRadius: "2px",
          background: "#F1F1F1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            height: "80%",
          }}
        >
          <div>
            <Image src={Ellipse} alt="ellipse" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <Image src={Icon} alt="icon" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              marginTop: "50%",
            }}
          >
            <h2
              style={{
                color: "#000",
                textAlign: "center",
                fontFamily: "Raleway",
                fontSize: "21px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Adicionar Churras
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
