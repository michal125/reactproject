import React, {Component} from 'react'
import { useState } from 'react';

export const MainForm = (props) => {
    const [rowsData, setRowsData] = useState([])

    const addTableRows = ()=> {
        const rowsInput = {
            clientId:'',
            clientName:'',
            city:'',
            street:'',
            postCode:'',
            country:'',
            personRespon:''
        }
        setRowsData([...rowsData,rowsInput])
    }

    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }


   const handleChange = (index, evnt)=>{  
        const { name, value } = evnt.target;
         const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
         setRowsData(rowsInput);
}

        return (
            <div>
                <table className="titleForm">
                    <th>Client Id</th>
                    <th>Client Name</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Post Code</th>
                    <th>Country</th>

                </table>
                <form className='main-form' method='post'>
                    {
                     rowsData.map((data, index) => {
                        const {clientId,clientName,city,street,postCode,country} = data;
                    return(
                    <tr key={index}>
                    <input type="text" value={clientId} onChange={(evnt)=>(handleChange(index, evnt))} id="clientId" name="clientId" />
                    <input type="text" value={clientName}  onChange={(evnt)=>(handleChange(index, evnt))} id="clientName" name="clientName" />
                    <input type="text" value={city} onChange={(evnt)=>(handleChange(index, evnt))} id="city" name="city" />
                    <input type="text"  value={street} onChange={(evnt)=>(handleChange(index, evnt))} id="street" name="street" />
                    <input type="text"  value={postCode} onChange={(evnt)=>(handleChange(index, evnt))} id="postCode" name="postCode" />
                    <input type="text" value={country} onChange={(evnt)=>(handleChange(index, evnt))} id="country" name="country" />
                    <input type="checkbox" />
                    </tr>
                    );    
                    })}
                </form>
                <div className='main-form-button'>
                    <button onClick={addTableRows}>Add record</button>
                    <button>Delete record</button>
                    <button>Save</button>
                </div>
            
            </div>
        )
   

}



export default MainForm
