const FormList = (probs) => {
  
var info=probs.newdata;
// if(info==null)
// {
//     localStorage.setItem("info",JSON.stringify([]))
// }
// else
// {
//     info=JSON.parse(localStorage.getItem("info"))
// } 


//const [userData,setUserData]=useState(probs.newdata)
 //console.log(probs.newdata);
 //console.log(info);


// useEffect(()=>{
//    loadData()
//  },userData)
 

//  const loadData=()=>{
//     if(info==null)
//     {
//       localStorage.setItem("info",JSON.stringify([]))
//      }
//     else
//     {
//       info=JSON.parse(localStorage.getItem("info"))
//       //  console.log("info",info);
//     } 
//     loadData()
//  }

//  console.log("info",info);
  

 
 
  return(
    <div>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                    <td>Department </td>
                    <td>Salary</td>
                    <td>marital state</td>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((ele)=>{
                       return(
                        <tr>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.address}</td>
                            <td>{ele.department}</td>
                            <td>{ele.salary}</td>
                            <td>{ele.marital}</td>
                            
                        </tr>)
                    })  
                }
            </tbody>
        </table>
    </div>
  )
}

export default FormList