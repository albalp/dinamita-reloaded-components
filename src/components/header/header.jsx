import './header.css'
import { PropTypes } from 'prop-types';
const Header = ({borderRadius, backgroundColor, label, size, variant, ...props}) =>{
    
    return(
        <div>
            <div className={`header ${variant}`} style={backgroundColor && { backgroundColor }} {...props} >
                {label}
            </div>
        </div>
    );
}
export default Header;

Header.propTypes = {
    borderRadius: PropTypes.bool,
    backgroundColor: PropTypes.string,
    label: PropTypes.string,
    variant : PropTypes.oneOf(['sb-background-white', 'sb-background-black']),
};

Header.defaultProps = {
    backgroundColor: 'sb-background-black',
    borderRadius: true,
    label: 'Hola, soy un header'
};