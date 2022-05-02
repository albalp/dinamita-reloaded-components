import './textArea.css';
import { PropTypes } from 'prop-types';

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

TextArea.propTypes = {
    borderRadius: PropTypes.bool,
    placeholder : PropTypes.string.isRequired,
};

TextArea.defaultProps = {
    borderRadius: true,
    placeholder: '',
};  