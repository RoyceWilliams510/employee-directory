import React from "react";


function Table(prop) {
    var people = prop.people
    return (
    <table className="table table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            {people.map( (person,index)=>{
                return (
                    <tr key = {"tr"+index}>
                        <th scope="row">{index+1}</th>
                        <td>{person.name}</td>
                        <td>{person.position}</td>
                        <td>{person.age}</td>
                    </tr>
                );
            })}
            
        </tbody>
    </table>    
    );
  }
  
  export default Table;
  