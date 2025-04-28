import React, { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import FormContact from '../components/FormContact.jsx';


async function fetchNewContact(newContactData){
  try {
    console.log(newContactData)
    const response = await fetch('https://playground.4geeks.com/contact/agendas/erjvarela/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContactData)
    });
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

const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const createContact= async () => {
    const newContactData = {
      name: fullName,
      email: email,
      phone: phone,
      address: address,
    }
    const newContact = await fetchNewContact(newContactData)
    console.log(newContact)
    dispatch({ type: 'add_contact', payload: newContact });
  }
  
  return (
    <FormContact 
    title="Add a New Contact"
    fullName={fullName}
    email={email}
    phone={phone}
    address={address}
    setFullName={setFullName} 
    setEmail={setEmail}    
    setPhone={setPhone}   
    setAddress={setAddress} 
    contactAction={createContact}
    />
  );
};

export default AddContact;
