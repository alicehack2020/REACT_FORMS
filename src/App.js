import FormInput from './components/FormInput';
import FormList from './components/FormList';
import { useEffect, useState } from 'react';
function App() {

const [trigger,setTrigger]=useState([])
console.log("app called");


 
useEffect(()=>{
  var info=JSON.parse(localStorage.getItem("info"))
  if(info==null)
  {
    localStorage.setItem("info",JSON.stringify([]))
  }
  info=JSON.parse(localStorage.getItem("info"))
  setTrigger(info)
},[])

// useEffect(()=>{
//   var info=JSON.parse(localStorage.getItem("info"))
//   if(info==null)
//   {
//     localStorage.setItem("info",JSON.stringify([]))
//   }
//   info=JSON.parse(localStorage.getItem("info"))
//   setTrigger(info)
// },[trigger])

const userData=(data)=>{
   var info=JSON.parse(localStorage.getItem("info"))
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