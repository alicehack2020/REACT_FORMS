const FormList = (probs) => {
var info=probs.newdata;
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