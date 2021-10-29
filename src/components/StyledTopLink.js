import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledTopLink = styled(NavLink)`
margin:0 15px;
color:#fff;
text-transform: uppercase;
text-decoration:none !important;

&:hover{
  color:#AAC0AA;
}

`;

export default StyledTopLink;
