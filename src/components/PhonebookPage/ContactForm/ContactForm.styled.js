import styled from 'styled-components'; 

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-bottom: 50px; 
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`

export const Input = styled.input`
    border: 1px solid darkgray;
    padding: 5px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 0 auto;
  color: #ffffff;
  border: none;
  background-color: #1976d2;
  border-radius: 10px;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fefefe;
    background-color: #000cff;
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`

// export const StyledLink = styled(NavLink)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 160px;
//   height: 60px;
//   margin: 0 auto;
//   color: #ffffff;
//   background-color: #1976d2;
//   border-radius: 10px;
//   text-decoration: none;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover,
//   &:focus {
//     color: #fefefe;
//     background-color: #000cff;
//   }
//   @media screen and (min-width: 1200px) {
//     margin: 0;
//   }
// `;