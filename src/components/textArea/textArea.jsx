import './textArea.css';
import { PropTypes } from 'prop-types';
//Declaring our component with his props.
const TextArea = ({placeholder, borderRadius, ...props}) =>{
    const radius = borderRadius && 'storybook-textarea--border-radius';

    return(
        <div>
            <label>Comments</label>
                <textarea  required="" rows="5" className={[radius]} placeholder= {placeholder}  {...props}>
                
                </textarea>

        </div>
    );
}
export default TextArea;
//The props that can be use are border radius or placeholder
TextArea.propTypes = {
    borderRadius: PropTypes.bool,
    placeholder : PropTypes.string.isRequired,
};

TextArea.defaultProps = {
    borderRadius: true,
    placeholder: '',
};  