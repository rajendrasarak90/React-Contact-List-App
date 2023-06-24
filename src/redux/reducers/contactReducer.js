const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS": // reducer for storing all the contacts
      return action.payload;
    case "ADD_CONTACT": // reducer for storing single contact
      return [...state, action.payload];
    case "UPDATE_CONTACT": // reducer for updating contact
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT": // reducer for deleting the contact
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      return filterContacts;
    default:
      return state;
  }
};

export default contactReducer;
