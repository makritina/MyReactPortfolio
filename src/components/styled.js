
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
display: block;
height:90px;
color:#fff;
position: relative;
margin-bottom: 100px;
text-transform: uppercase;
text-decoration:none !important;
writing-mode: vertical-rl;
transform: rotate(180deg);
margin: 0 auto;

&:hover{
  color:#AAC0AA;
}

`;

export default StyledLink;
