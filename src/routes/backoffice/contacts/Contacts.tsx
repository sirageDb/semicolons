import React from "react";
import MainLayout from "../../../components/mainLayoutBackoffice/MainLayoutBackoffice";
import ContactCell from "../../../components/backoffice/contactCell/ContactCell";
export default function Contacts(): JSX.Element {
  return (
    <MainLayout pageTitle={"Contacts"}>
      <ContactCell
        dateContacted={"01/10/2021"}
        email={"this is the emeil"}
        subject={"subject"}
        message={"message"}
        fullname={"full name"}
        isNew={false}
      />
      <ContactCell
        dateContacted={"01/10/2021"}
        email={"this is the emeil"}
        subject={"subject"}
        message={"message"}
        fullname={"full name"}
        isNew={true}
      />
    </MainLayout>
  );
}
