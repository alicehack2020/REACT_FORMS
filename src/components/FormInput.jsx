import React, { useState } from 'react'

const FormInput = (probs) => {

    // const [userName,setUserName]=useState()
    // const [userAge,setUserAge]=useState()
    // const [userAddress,setUserAddress]=useState()
    // const [userDepartment ,setUserDepartment ]=useState()
    // const [userSalary,setUserSalary]=useState()
    // const [userMarital ,setUserMarital ]=useState()
  
    const [formData,setFormData]=useState([])


    const handdle=(e)=>{
        const {name,value}=e.target;

        setFormData((prev)=>({...prev, [name]:value}));
    }
   
    const {userName,userAge,userAddress,userDepartment,userSalary,userMarital}=formData

    const addToData=()=>
    {
        var status=""
        if(userMarital==true)
        {
            status="YES"  
        }
        else{
            status="NO" 
        }
        
        
        var item={
            name: userName,
            age: userAge,
            address: userAddress,
            department: userDepartment,
            salary: userSalary,
            marital:status
        }

      probs.Data(item);
      console.log(userMarital);
        
       
    }

  return (
    <div>
        <input type="name" onChange={handdle} placeholder='userName' value={userName} name="userName"/>
        <br />
        <input type="name" onChange={handdle}  placeholder='userAge' value={userAge}  name="userAge" />
        <br />
        <input type="name" onChange={handdle}  placeholder='userAddress' value={userAddress}  name="userAddress"/>
        <br />
        <select value={userDepartment} name="userDepartment"  onChange={handdle}>
                 <option value="designer">designer</option>
                <option value="testing">testing</option>
        </select>
        {/* <input type="name" placeholder='userDepartment' value={userDepartment} onChange={(e)=>setUserDepartment(e.target.value)}/> */}
        <br />
        <input type="name" placeholder='userSalary' onChange={handdle} value={userSalary}  name="userSalary"/>
        <br />
        <label>Marital Status</label>
        <input type="checkbox" placeholder='userMarital' onChange={handdle} checked={userMarital}  name="userMarital"/>
        <br />
        <button onClick={addToData}>Submit</button>
    </div>
  )
}

export default FormInput