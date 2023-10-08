import React, { useEffect, useState } from "react";
import Hero from "../common/Hero";
import Modal from "../components/Contact/Modal";
import ContactHero from "../assets/Hero/contact_hero.jpg";

const Contact = () => {
  const [openContactModal, setOpenContactModal] = useState(false);

  useEffect(() => {
    if (openContactModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openContactModal]);

  return (
    <>
      <Hero
        image={ContactHero}
        isContact
        setOpenContactModal={setOpenContactModal}
      />
      {openContactModal && (
        <Modal
          setOpenContactModal={setOpenContactModal}
          openContactModal={openContactModal}
        />
      )}
    </>
  );
};

export default Contact;
