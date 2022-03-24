import React, { useState } from 'react'

const FormInput = (probs) => {

    const [userName,setUserName]=useState()
    const [userAge,setUserAge]=useState()
    const [userAddress,setUserAddress]=useState()
    const [userDepartment ,setUserDepartment ]=useState()
    const [userSalary,setUserSalary]=useState()
    const [userMarital ,setUserMarital ]=useState()
  
   

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
            name:userName,
            age:userAge,
            address:userAddress,
            department:userDepartment,
            salary:userSalary,
            marital:status
        }

      probs.Data(item);

     console.log(userMarital);
        
       
    }

  return (
    <div>
        <input type="name" placeholder='userName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <br />
        <input type="name" placeholder='userAge' value={userAge} onChange={(e)=>setUserAge(e.target.value)}/>
        <br />
        <input type="name" placeholder='userAddress' value={userAddress} onChange={(e)=>setUserAddress(e.target.value)}/>
        <br />
        <select value={userDepartment} onChange={(e)=>setUserDepartment(e.target.value)} >
                 <option value="designer">designer</option>
                <option value="testing">testing</option>
        </select>
        {/* <input type="name" placeholder='userDepartment' value={userDepartment} onChange={(e)=>setUserDepartment(e.target.value)}/> */}
        <br />
        <input type="name" placeholder='userSalary' value={userSalary} onChange={(e)=>setUserSalary(e.target.value)}/>
        <br />
        <input type="checkbox" placeholder='userMarital' checked={userMarital} onChange={(e)=>setUserMarital(e.target.checked)}/>
        <br />
        <button onClick={addToData}>Submit</button>
    </div>
  )
}

export default FormInput