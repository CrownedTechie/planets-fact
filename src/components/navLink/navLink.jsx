import arrowRightIcon from "../../assets/icon-chevron.svg";

export const NavLink = () => {
 return ( 
  <li>
   <p className="text-medium">Mercury</p>
   <img src={arrowRightIcon} alt="arrow right icon" />
  </li>
 );
}