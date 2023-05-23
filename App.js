import EmpForm from "./EmpForm";
import EmpTable from "./EmpTable";
import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails"; 
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function App(){
  return(
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<EmpTable/>}/>
        <Route path="/form" element={<EmpForm/>}/>
        <Route path="/empedit/:empid" element={<EmpEdit/>}/>
        <Route path="/empdetails/:empid" element={<EmpDetails/>}/>
      </Routes>
     </Router>
    </div>
  )
}
export default App;