import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #ffffff;
  transition: color 250ms ease-in-out;
  &:hover { 
    color: lightgrey;
  }
  &:active {
    color: lightgrey;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
`