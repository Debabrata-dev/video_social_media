import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Clint.css'

const Clint = () => {
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

  {/* Here is the  droup box  */}

<div className='droup'>
<form>
<select name="Names" id="Names">
    <option>All</option>
    <option value="rigatoni">AAAAA</option>
  <option value="dave">BBBBB</option>
  <option value="pumpernickel">CCCCC</option>
  <option value="reeses">DDDDD</option>
</select>
</form>
<br/>
</div>

<div className='searchbar'>
    <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"></input>
</div>

     <div className="first">
    <table>
        <tr>
            <th>No</th>
            <th>Joining date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
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
    </div>


  )
}

export default Clint