import React, {useState} from 'react';
import MaterialTable from 'material-table';
import './teacher.css';

export const Teacher=()=>{
    const teacherlist=[
        {id:'1',name:'Helen Viane',subject:'Aeronautics',email:'helen@gmail.com'},
        {id:'2',name:'John Klaus',subject:'Applied Phy',email:'john@gmail.com'},
        {id:'3',name:'Ella Mispan',subject:'Machine learning',email:'ella@gmail.com'},
        {id:'4',name:'Nia Erron',subject:'AI',email:'nia@gmail.com'},

    ]

    const [data, setData] = useState(teacherlist)
    const columns=[
      {id:'ID',field:'id',editable:false},
        {title:'Name',field:'name'},
        {title:'Subject',field:'subject'},
        {title:'Email',field:'email'},

        

    ]
    return(
        
       <MaterialTable title="Teachers Details"
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


export default Teacher



