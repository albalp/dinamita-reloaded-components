import Form from './components/Form/Form';
import { BiMoon } from "react-icons/bi";

function App() {
  
  return (

    <Form>
        <div className="input-container">
                <div className="input-content">
                    <input type="email" className="input-content-control" placeholder="Email address" autoComplete="off" />
                    <BiMoon/>
                </div>
                <span className="input-content-legend">Invalid value</span>
            </div>
            <div className="input-container">
                <div className="input-content">
                    <input type="password" className="input-content-control" placeholder="Password" autoComplete="off" />
                    <BiMoon/>
                </div>
                <span className="input-content-legend">Invalid value</span>
            </div>
            <div className="input-container">
                <div className="input-content">
                    <input type="password" className="input-content-control" placeholder="Confirm password" autoComplete="off" />
                    <BiMoon/>
                </div>
                <span className="input-content-legend">Invalid value</span>
            </div>
      </Form>
  );
}

export default App;
