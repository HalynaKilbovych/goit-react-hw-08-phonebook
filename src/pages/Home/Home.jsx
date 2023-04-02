import heroBg from '../../img/hero-bg.jpg';
import { HomeSection, Container, Wrapper, StyledLink } from './Home.styled';

export default function Home() {
  return (
    <HomeSection>
      <Container>
        <Wrapper>
          <div>
            <h1>Welcome to Phonebook App</h1>
            <p>
            Welcome to the Phone Book application! Try it out today and discover how easy it is to manage your contacts!
            </p>
            <StyledLink to="/register">Get Started</StyledLink>
          </div>
          <img src={heroBg} alt="People with phones" />
        </Wrapper>
      </Container>
    </HomeSection>
  );
}