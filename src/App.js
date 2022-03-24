import FormInput from './components/FormInput';
import FormList from './components/FormList';
import { useState } from 'react';
function App() {
  
const [trigger,setTrigger]=useState([])
// var trigger=""
console.log("app called");

const userData=(data)=>{
  var info=JSON.parse(localStorage.getItem("info"))
  if(info==null)
  {
    info=[]
  }
  setTrigger(data)
  var listData=[...info,data]   
  localStorage.setItem("info",JSON.stringify(listData))
 // setTrigger(data)
}

  return (
    <div>
       <FormInput Data={userData}/>
       <FormList newdata={trigger}/> 
    </div>
   
  );
}

export default App