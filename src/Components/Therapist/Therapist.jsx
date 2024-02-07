import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Therapist.css'
const Therapist = () => {
  return (
    <div className="app">
    <Navbar/>
   <div className='app_page'>
    <Sidebar/>
   </div> 
   {/* here is the table */}
   <div className='client'>
<p>Client</p>
   </div>

{/* Here is the  droup bx  */}



<div className='searchbar'>
  <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
</div>

   <div className="first">
  <table>
      <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Specialities</th>
          <th>Type</th>
          <th>Status</th>
          <th>Porfile</th>
      </tr>
      <tr>
          <td>1</td>
          <td>24-02-2020</td>
          <td>Anom</td>
          <td>aany@gmail.com</td>
          <td><button>Acitive</button></td>
          <td><button>View</button></td>
      </tr>
      <tr>
          <td>2</td>
          <td>24-02-2020</td>
          <td>Megha</td>
          <td>grey@gmail.com</td>
          <td><button>Acitive</button></td>
          <td><button>View</button></td>
      </tr>
      <tr> 
           <td>3</td>
           <td>24-02-2020</td>
          <td>Subham</td>
          <td>akons@gmail.com</td>
          <td><button>InAcitive</button></td>
          <td><button>View</button></td>
      </tr>
  </table>
</div>

<div className='button'>
<button onclick="myFunction()">Approve Therapist</button>
</div>

  </div>


)
}
export default Therapist