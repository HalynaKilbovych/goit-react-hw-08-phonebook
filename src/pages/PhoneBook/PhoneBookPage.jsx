import { useSelector } from "react-redux";
import { ContactForm } from "components/PhonebookPage/ContactForm/ContactForm";
import { ContactList } from "components/PhonebookPage/ContactList/ContactList";
import { Filter } from "components/PhonebookPage/Filter/Filter";
import { Wrapper, Title, ContactTitle } from "./PhoneBookPage.styled";
import { Loader } from "utils/Loader/Loader";
import { selectIsLoading } from "redux/contacts/selectors";

export const PhoneBookPage = () => {

  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
    {isLoading && <Loader />}
      <Title>Phonebook</Title>
        <ContactForm></ContactForm>
      <ContactTitle>Contacts</ContactTitle>
        <Filter/>
        <ContactList/>
    </Wrapper>
  );
};