import React, {useState} from 'react';
import MaterialTable from 'material-table';

export const Student=()=>{
    const studentlists=[
        {id:'1',name:'Helen Viane',department:'CIS',email:'helen@gmail.com'},
        {id:'2',name:'John Klaus',department:'SE',email:'john@gmail.com'},
        {id:'3',name:'Ella Mispan',department:'ME',email:'ella@gmail.com'},
        {id:'4',name:'Nia Erron',department:'EE',email:'nia@gmail.com'},

    ]

    const [data, setData] = useState(studentlists)
    const columns=[
      {id:'ID',field:'id',editable:false},
        {title:'Student Name',field:'name'},
        {title:'Department',field:'department'},
        {title:'Email',field:'email'},

        

    ]
    return(
        
       <MaterialTable title="Students Details"
       data={data}
       columns={columns}
       editable={{
         onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
           const updatedRows=[...data,{id:Math.floor(Math.random()*100),...newRow}]
           setTimeout(()=>{setData(updatedRows)
          
            resolve()},2000)
           
         }),
         onRowDelete:selectedRow=> new Promise((resolve,reject)=>{
         const index=selectedRow.tableData.id;
         const updatedRows=[...data]
         updatedRows.splice(index,1)
         setData(updatedRows)
         setTimeout(()=>{setData(updatedRows)
          
          resolve()},2000)
         }),
         onRowUpdate:(updatedRow,oldRow)=> new Promise((resolve,reject)=>{
          const index=oldRow.tableData.id;
          const updatedRows=[...data]
          updatedRows[index]=updatedRow
          setTimeout(()=>{
            setData(updatedRows)
          
            resolve()},2000)
     
          
         })
        
       }}
       options={{
         actionsColumnIndex:-1,addRowPosition:"first"
       }}
       
       
       />
       
      
        
    )
}


export default Student



