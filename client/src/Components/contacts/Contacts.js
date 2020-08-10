import React, { Fragment, useContext, useEffect } from "react";

import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const { loading } = authContext;
  const { contacts, filtered, theFilterdValue, getContacts } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4 style={Style}>Please Add a Contact</h4>;
  }

  return (
    <Fragment>
      {" "}
      {contacts !== null && !loading ? (
        filtered !== null ? (
          filtered.length === 0 ? (
            <h4 style={Style}>
              There is no Contact matching " {""}
              {theFilterdValue}
              {""} "
            </h4>
          ) : (
            filtered.map((contact) => (
              <ContactItem key={contact._id} contact={contact} animate="yes" />
            ))
          )
        ) : (
          contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

const Style = {
  textAlign: "center",
  fontSize: "22px",
};

export default Contacts;
