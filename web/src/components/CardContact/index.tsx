import { useState } from "react";
import { tContactReturn } from "../../context/auth/interfaces";
import StyledCardContact from "./style";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import Modal from "../Modal";
import UpdateContactForm from "../UpdateContactForm";
import DeleteContactForm from "../DeleteContactForm";

const CardContact = (contactData: tContactReturn) => {
  const [openUpdateContactModal, setOpenUpdateContactModal] =
    useState<boolean>(false);
  const [openDeleteContactModal, setOpenDeleteContactModal] =
    useState<boolean>(false);

  const handleopenUpdateContactModal = () => setOpenUpdateContactModal(true);
  const handleCloseUpdateContactModal = () => setOpenUpdateContactModal(false);

  const handleopenDeleteContactModal = () => setOpenDeleteContactModal(true);
  const handleCloseDeleteContactModal = () => setOpenDeleteContactModal(false);

  return (
    <>
      <Modal
        isOpen={openUpdateContactModal}
        onClose={handleCloseUpdateContactModal}
        title="Edit contact"
      >
        <UpdateContactForm contactData={contactData} id={contactData.id} />
      </Modal>

      <Modal
        isOpen={openDeleteContactModal}
        onClose={handleCloseDeleteContactModal}
        title="Edit contact"
      >
        <DeleteContactForm id={contactData.id} />
      </Modal>

      <StyledCardContact>
        <div className="profileImage">
          <IoIosContact />
        </div>
        <h3 className="fullName">{contactData.fullName}</h3>

        <div className="email">
          <AiOutlineMail />
          <p>{contactData.email}</p>
        </div>

        <div className="phoneNumber">
          <AiOutlinePhone />
          <span>{contactData.phoneNumber}</span>
        </div>

        <div className="menu">
          <button onClick={() => handleopenDeleteContactModal()}>
            <FaTrash />
          </button>

          <button onClick={() => handleopenUpdateContactModal()}>
            <AiOutlineAppstoreAdd />
          </button>
        </div>
      </StyledCardContact>
    </>
  );
};

export default CardContact;
