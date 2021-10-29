
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledHomeLink = styled(NavLink)`
display: block;
height:90px;
color:#fff;
position: relative;
margin-bottom: 100px;
text-transform: uppercase;
text-decoration:none !important;

&:hover{
  color:#fff;
}
@media screen and (max-width:548px){
margin-bottom:60px;
}

`;

export default StyledHomeLink;
