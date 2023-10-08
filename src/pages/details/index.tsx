import CardDetails from "@/components/Details/CardDetails/Card";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useBarbecue } from "@/contexts/BarbecueContext";
import { useModal } from "@/contexts/ModalContext";
import Modal from "@/components/BarbecueSchedule/Modal";
import FormAddGuest from "@/components/Details/FormAddGuest";
import { BarbecueLayout } from "@/Layouts/Barbecue";

export default function Details() {
  const { barbecueDetail } = useBarbecue();
  const router = useRouter();
  const { toggle, isOpen } = useModal();
  
  useEffect(() => {
    if (barbecueDetail?.title === "") {
      router.push("/barbecue-schedule");
    }
  }, [barbecueDetail, router]);

  return (
    <>
      <BarbecueLayout>
        <CardDetails />
      </BarbecueLayout>
      <Modal isOpen={isOpen} toggle={toggle}>
        <FormAddGuest />
      </Modal>
    </>
  );
}
