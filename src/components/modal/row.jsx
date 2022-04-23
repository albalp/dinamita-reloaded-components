import "./css/row.css";

//destructuración-manda datos
const Row = ({ children }) => {

  return (
      //clase dinamica
    <div className="grid-container">
            {children}
    </div>
  );
};

export default Row;