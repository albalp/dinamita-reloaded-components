import './header.css'
import { PropTypes } from 'prop-types';
import Button from '../SaveButton';
import { BiX } from "react-icons/bi";
//Component Header with the props that will be used
const Header = ({borderRadius, backgroundColor, label, variant, closeModal, ...props}) =>{
    
    const radius = borderRadius && 'storybook-header--border-radius';

    return(
        <div>
            <header className={[`header ${variant}` , radius].join(' ')} style={backgroundColor && { backgroundColor }} {...props} >
                {label}
<<<<<<< HEAD
                <Button className="header-button" icon={<BiX/>} shadow={false} onClick={closeModal} />
=======
                <Button className="header-button" icon={<BiX/>} shadow={false} onClick={closeModal} aria-label="header button" />
>>>>>>> 7ac77971189bd3a2d385489b293e302f52cba71c
            </header>
        </div>
    );
}
export default Header;

//Defining the propTypes
Header.propTypes = {
    borderRadius: PropTypes.bool,
    backgroundColor: PropTypes.string,
    label: PropTypes.string,
    variant : PropTypes.oneOf(['sb-background-white', 'sb-background-black', 'nova']),
};

//In case don't put any prop to the rendering component, this is de default props that will be shown. 
Header.defaultProps = {
    backgroundColor: 'sb-background-black',
    borderRadius: true,
    label: 'Hola, soy un header'
};