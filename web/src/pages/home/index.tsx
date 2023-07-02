import { useNavigate } from "react-router-dom";
import StyledHome from "./style";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import CardContact from "../../components/CardContact";
import { AuthContext } from "../../context/auth";
import Modal from "../../components/Modal";
import CreateContactForm from "../../components/CreateContactForm";

const Home = () => {
  const { contacts } = useContext(AuthContext);

  const navigate = useNavigate();
  const isAthenticated = localStorage.getItem("@EasyContactsToken");

  const [openCreateContactModal, setOpenCreateContactModal] =
    useState<boolean>(false);

  const handleopenCreateContactModal = () => setOpenCreateContactModal(true);
  const handleCloseCreateContactModal = () => setOpenCreateContactModal(false);

  useEffect(() => {
    if (!isAthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={openCreateContactModal}
        onClose={handleCloseCreateContactModal}
        title="Register a contact"
      >
        <CreateContactForm />
      </Modal>

      <StyledHome>
        <Header />
        <div className="painel"></div>
        <div className="content">
          <ul className="cards">
            {contacts.length < 1 ? (
              <div className="noContacts">
                <p>Don't have registered contacts?</p>
                <span onClick={() => handleopenCreateContactModal()}>
                  Register one now!
                </span>
              </div>
            ) : (
              contacts.map((el) => {
                return <CardContact key={el.id} contactData={el} />;
              })
            )}
          </ul>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
