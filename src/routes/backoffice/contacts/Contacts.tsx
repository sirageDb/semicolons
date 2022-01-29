import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ContactCell from "../../../components/backoffice/contactCell/ContactCell";
import apiEndPoint from "../../../config/apiEndPoint";
export default function Contacts(): JSX.Element {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const apiResposne = await fetch(apiEndPoint + "/contact/getcontacts");
    const data = await apiResposne.json();
    setContacts(data);
  };


  return (
    <MainLayout pageTitle={"Contacts"}>
      {(contacts && contacts.length > 0) && contacts.map((contact: any) => {
        return (
          <ContactCell
            key={contact._id}
            dateContacted={contact.dateContacted}
            email={contact.email}
            subject={contact.subject}
            message={contact.message}
            fullname={contact.fullname}
            isNewContact={contact.isNewContact}
            contact_id={contact._id}
            updateStatusCallback={() => getContacts()}
          />
        );
      })}
    </MainLayout>
  );
}
