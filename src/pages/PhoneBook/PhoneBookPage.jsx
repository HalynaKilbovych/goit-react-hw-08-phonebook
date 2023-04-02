import { useSelector } from "react-redux";
import { ContactForm } from "components/PhonebookPage/ContactForm/ContactForm";
import { ContactList } from "components/PhonebookPage/ContactList/ContactList";
import { Filter } from "components/PhonebookPage/Filter/Filter";
import { Wrapper, Title, ContactTitle } from "./PhoneBookPage.styled";
import { Loader } from "utils/Loader/Loader";
import { selectIsLoading } from "redux/contacts/selectors";
import { selectContacts } from "redux/contacts/selectors";

const PhoneBookPage = () => {

  const isLoading = useSelector(selectIsLoading);
  const contactsToDisplay = useSelector(selectContacts);
  const noContacts = contactsToDisplay.length === 0;

  return (
    <Wrapper>
    {isLoading && <Loader />}
      <Title>Phonebook</Title>
        <ContactForm></ContactForm>
      {noContacts ? (
        <Title>There are no contacts</Title>
      ) : (
        <>
          <ContactTitle>Contacts</ContactTitle>
          <Filter/>
          <ContactList/>
        </>
      )}
    </Wrapper>
  );
};

export default PhoneBookPage; 