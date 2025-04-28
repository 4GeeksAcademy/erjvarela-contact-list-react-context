import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

const  EditContact = () => {
    let { contactId } = useParams();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const updateContact = async () => {
        const newContactData = {
            name: fullName,
            email: email,
            phone: phone,
            address: address
        }
        const newContactInfo = await fetchUpdateContact(newContactData,contactId)
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