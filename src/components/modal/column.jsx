import '../modal/css/column.css'

//destructuración-manda datos
const Column = ({ children }) => {

  return (
      //clase dinamica
    <div className="column">
            {children}
    </div>
  );
};

export default Column;