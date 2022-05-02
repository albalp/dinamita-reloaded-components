import './textArea.css';
import { PropTypes } from 'prop-types';

const TextArea = ({placeholder, backgroundColor, borderRadius, ...props}) =>{
    const radius = borderRadius && 'storybook-button--border-radius';

    return(
        <div>
            <label> *Comments</label>
                <textarea  required="" rows="5" className={[radius]} placeholder= '' style={backgroundColor && { backgroundColor }} {...props}>
                </textarea>

        </div>
    );
}
export default TextArea;

TextArea.propTypes = {
    borderRadius: PropTypes.bool,
    backgroundColor: PropTypes.string,
    placeholder : PropTypes.oneOf(['empty','writing']),
};

TextArea.defaultProps = {
    backgroundColor: 'sb-background-black',
    borderRadius: true,
};  