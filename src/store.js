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
      return {
        contacts: contacts
      }

    case 'add_contact':
      const newContact = action.payload
      console.log(newContact)
      return {
        ...store,
        contacts: [...store.contacts, newContact]
      };
    case 'del_contact':
      console.log('hello')
      return {};

    default:
      throw Error('Unknown action.');
  }
}
