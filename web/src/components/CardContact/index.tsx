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

interface iCardContactProps {
  contact: tContactReturn;
}

const CardContact = ({ contact }: iCardContactProps) => {
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
        <UpdateContactForm
          contact={contact}
          onClose={handleCloseUpdateContactModal}
        />
      </Modal>

      <Modal
        isOpen={openDeleteContactModal}
        onClose={handleCloseDeleteContactModal}
        title="Edit contact"
      >
        <DeleteContactForm
          id={contact.id}
          onClose={handleCloseDeleteContactModal}
        />
      </Modal>

      <StyledCardContact>
        <div className="profileImage">
          <IoIosContact />
        </div>
        <h3 className="fullName">{contact.fullName}</h3>

        <div className="email">
          <AiOutlineMail />
          <p>{contact.email}</p>
        </div>

        <div className="phoneNumber">
          <AiOutlinePhone />
          <span>{contact.phoneNumber}</span>
        </div>

        <div className="menu">
          <button className="buttonDelete" onClick={() => handleopenDeleteContactModal()}>
            <FaTrash />
          </button>

          <button className="buttonUpdate" onClick={() => handleopenUpdateContactModal()}>
            <AiOutlineAppstoreAdd />
          </button>
        </div>
      </StyledCardContact>
    </>
  );
};

export default CardContact;
