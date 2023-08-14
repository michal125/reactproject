import React from "react";
import {useState} from "react"

import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";

export const Table = ({rows, deleteRow}) => {
    return <div className="table-wrapper">
        <table className="table">
            <thead>
            <tr>
                <th>Page</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    rows.map((row,idx) => {
                        const statuText = row.status.charAt(0).toUpperCase() + row.status.slice(1)
                        return <tr key={idx}>
                        <td>{row.page}</td>
                        <td className="expand">{row.description}</td>
                        <td>
                                <span>{statuText}</span>
                        </td>
                        <td>
                            <span>
                            <BsFillTrashFill onClick={()=> deleteRow(idx)}/>
                            <BsFillPencilFill />
                            </span>
                    </td>
                        </tr>
                    }) 
                }
               
            </tbody>

        </table>
    </div>
}

export default Table
