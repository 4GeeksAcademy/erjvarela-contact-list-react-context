import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import FormContact from '../components/FormContact.jsx';


async function fetchUpdateContact(newContactData, contactId) {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/erjvarela/contacts/${contactId}`,
      {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContactData),
      })
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to create contact:', response.status, errorData);
      return null;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error creating contact:', error);
    return null;
  }
}

const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  let { contactId } = useParams();
  let contactInfo = store.contacts.filter(contact => contact.id == contactId)[0];
  const [fullName, setFullName] = useState(contactInfo.name);
  const [email, setEmail] = useState(contactInfo.email);
  const [phone, setPhone] = useState(contactInfo.phone);
  const [address, setAddress] = useState(contactInfo.address);

  const updateContact = async () => {
    const newContactData = {
      name: fullName,
      email: email,
      phone: phone,
      address: address
    }
    const newContactInfo = await fetchUpdateContact(newContactData, contactId)
    dispatch({ type: 'remove_contact', payload: contactId })
    dispatch({ type: 'add_contact', payload: newContactData })
  }
  return (
    <FormContact
      title="Edit Contact"
      fullName={fullName}
      email={email}
      phone={phone}
      address={address}
      setFullName={setFullName}
      setEmail={setEmail}
      setPhone={setPhone}
      setAddress={setAddress}
      contactAction={updateContact}
    />
  );
};


export default EditContact;