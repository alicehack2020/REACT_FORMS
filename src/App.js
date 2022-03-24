import { useState } from 'react';
import FormInput from './components/FormInput';
import FormList from './components/FormList';
function App() {
  
const [trigger,setTrigger]=useState()

const userData=(data)=>{
  var info=JSON.parse(localStorage.getItem("info"))
  if(info==null)
  {
    info=[]
  }
  var listData=[...info,data]   
  localStorage.setItem("info",JSON.stringify(listData))
  setTrigger(data)
}

  return (
    <div>
       <FormInput Data={userData}/>
       <FormList newdata={trigger}/>
    </div>
   
  );
}

export default App
