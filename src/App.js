import Form from './components/Form/Form';
import { BiMoon } from "react-icons/bi";

function App() {
  let image = "url(https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg)";
  
  return (
    <div>
      <Form title="Create a new customer" variant="flex" labelButton="Create account" size="small" text="Here you can add the information to create and register him in your database" backgroundImage="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY3NTM5MzU5MDg3MjczODcw/business-structure-which-type-is-best-for-your-business.png">
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
    </div>
  );
}

export default App;
