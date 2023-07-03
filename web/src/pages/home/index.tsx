import { useNavigate } from "react-router-dom";
import StyledHome from "./style";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import CardContact from "../../components/CardContact";
import { AuthContext } from "../../context/auth";
import Modal from "../../components/Modal";
import CreateContactForm from "../../components/CreateContactForm";
import Button from "../../components/Button";
import UpdateProfileForm from "../../components/UpdateProfileForm";
import DeleteProfileForm from "../../components/DeleteProfileForm";

const Home = () => {
  const { contacts, userLogged } = useContext(AuthContext);

  const navigate = useNavigate();
  const isAthenticated = localStorage.getItem("@EasyContactsToken");

  const [openCreateContactModal, setOpenCreateContactModal] =
    useState<boolean>(false);
  const [openUpdateProfileModal, setOpenUpdateProfileModal] =
    useState<boolean>(false);
  const [openDeleteProfileModal, setOpenDeleteProfileModal] =
    useState<boolean>(false);

  const handleOpenCreateContactModal = () => setOpenCreateContactModal(true);
  const handleCloseCreateContactModal = () => setOpenCreateContactModal(false);

  const handleOpenUpdateProfileModal = () => setOpenUpdateProfileModal(true);
  const handleCloseUpdateProfileModal = () => setOpenUpdateProfileModal(false);

  const handleOpenDeleteProfileModal = () => setOpenDeleteProfileModal(true);
  const handleCloseDeleteProfileModal = () => setOpenDeleteProfileModal(false);

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
        <CreateContactForm onClose={handleCloseCreateContactModal} />
      </Modal>

      <Modal
        isOpen={openUpdateProfileModal}
        onClose={handleCloseUpdateProfileModal}
        title="Update profile"
      >
        <UpdateProfileForm user={userLogged} onClose={handleCloseUpdateProfileModal} />
      </Modal>

      <Modal
        isOpen={openDeleteProfileModal}
        onClose={handleCloseDeleteProfileModal}
        title="Delete profile"
      >
        <DeleteProfileForm id={userLogged?.id} onClose={handleCloseDeleteProfileModal} />
      </Modal>

      <StyledHome>
        <Header />
        <div className="content">
          <div className="profile">
            <div className="profile-photo"></div>

            <p className="profile-fullName">{userLogged?.fullName}</p>
            <p className="profile-email">{userLogged?.email}</p>
            <p className="profile-phoneNumber">{userLogged?.phoneNumber}</p>

            <div className="profile-buttons">
              <Button
                type="button"
                text="Delete profile"
                onClick={handleOpenDeleteProfileModal}
              />
              <Button
                type="button"
                text="Update profile"
                onClick={handleOpenUpdateProfileModal}
              />
            </div>
          </div>

          <div className="cards">
            <div className="cards-painel">
              <h3>Your contacts</h3>
              <button onClick={handleOpenCreateContactModal}>
                Add contact
              </button>
            </div>

            <ul>
              {contacts.length < 1 ? (
                <div className="noContacts">
                  <p>Don't have registered contacts?</p>
                  <span onClick={() => handleOpenCreateContactModal()}>
                    Register one now!
                  </span>
                </div>
              ) : (
                contacts.map((contact) => {
                  return <CardContact key={contact.id} contact={contact} />;
                })
              )}
            </ul>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
