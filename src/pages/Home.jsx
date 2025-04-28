import React, { useEffect } from 'react';
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom';
import RigoBaby from "../../src/assets/img/rigo-baby.jpg";

async function initializeAgenda() {
  try {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/erjvarela', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
      }
    });
    if (!response.ok) {
      console.error('Failed to initialize agenda:', response.status);
    } else {
      console.log('Agenda initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing agenda:', error);
  }
}

async function fetchDeleteContact(idToDelete) {
  try {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/erjvarela/contacts/${idToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error deleting contact', error);
    return false;
  }
}

async function fetchGetContacts() {
  try {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/erjvarela/contacts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Fetching contacts.")
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
}

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getContacts = async () => {
    const data = await fetchGetContacts();
    dispatch({ type: 'get_contacts', payload: data });
  }

  const handleDeleteContact = async (idToDelete) => {
    const deleted = await fetchDeleteContact(idToDelete);
    // if (deleted) {
    //   dispatch({ type: 'add_contacts', payload: data });
    // }
  }

  useEffect(() => {
    getContacts();
  },[]);

  return (
    <div className="m-2">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add-contact" className="btn btn-success">Add new contact</Link>
      </div>
      <div className="container">
        {store.contacts && store.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            img={RigoBaby}
            fullName={contact.name}
            location={contact.address}
            phone={contact.phone}
            email={contact.email}
            deleteFunction={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;