import '../../css/checkbox.css';

const Checkbox = ({ label, ...props }) => {
  return (
    <label>
        {label}
        <input type="checkbox" {...props} />
    </label>
  )
}

export default Checkbox;