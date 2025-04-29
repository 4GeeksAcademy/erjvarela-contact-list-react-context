export const initialStore = () => {
  return {
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  let id;
  switch (action.type) {

    case 'get_contacts':
      const contacts = action.payload.contacts
      return {
        contacts: contacts
      };
    case 'add_contact':
      const newContact = action.payload
      console.log(newContact)
      return {
        ...store,
        contacts: [...store.contacts, newContact]
      };
    case 'remove_contact':
      const contactIdRemoved = action.payload
      return {
        ...store,
        contacts: store.contacts.filter((contact) => {
          return contact.id !== contactIdRemoved;
        })
      };
    default:
      throw Error('Unknown action.');
  }
}
