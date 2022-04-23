import "./column.css";

//destructuración-manda datos
const Column = ({ children }) => {

  return (
      //clase dinamica
    <div className="column .row:after">
            {children}
    </div>
  );
};

export default Column;