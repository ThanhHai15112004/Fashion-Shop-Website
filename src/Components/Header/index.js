import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import Logo from './Logo';


const Header = () => {
  return (
<div className="header">
    
    <SubHeader></SubHeader>

    <div className="main_nav_header">
        <Logo></Logo>
    </div> 

</div>
    
    

  );
};

export default Header;
