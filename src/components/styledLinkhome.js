
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

@media screen and (max-width:992px){
 height: 40px;
  }
  @media screen and (max-width:548px){
    height:30px;
    
    }
  @media (max-width:427px){
    height: 25px;
    }
    @media (max-width:351px){
      height: 10px;
    }
    @media (max-width:307px){
      height: 0;
    }
    @media (max-width: 367px) and (orientation: portrait) { 
    height:0;
    }

`;

export default StyledHomeLink;
