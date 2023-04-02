import styled from 'styled-components'; 

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
`;

export const DeleteButton = styled.button`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
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
export const ContactWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    > p { 
        font-size: larger;
    }

`

