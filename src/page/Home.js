import React, { Component } from "react";
// import Nav from "../components/Nav";
import People from "../db/seed"
import Table from "../components/Table"

var copyPeople = People

class Home extends Component {
    state = {
        employees : People,
        searched: People,
        query: "all",
        sortBy:"null"
      };
    handleBtnClick = event => {
        // Storing the value of the old state
        var newState = { ...this.state };
        event.preventDefault();
        // Retrieving the value of the clicked button
        newState.searched = newState.employees.filter((person)=> {
            return person.position === newState.query
        })
        if(newState.query=== "all"){
            newState.searched = newState.employees
        }
        console.log(newState.searched);
        if(newState.sortBy ==="asc"){
            newState.searched.sort((a, b) => (a.age - b.age))        
        }    
        if(newState.sortBy ==="dsc"){
            newState.searched.sort((a, b) => (b.age - a.age))
        }    
        this.setState(newState);
    }
        
    handleFormChange = event => {
        event.preventDefault();
        var cat = event.target.value
        console.log(cat)
        var newState = { ...this.state };
        newState.query = cat;
        this.setState(newState);

    }
    handleSortChange = event => {
        event.preventDefault();
        var cat = event.target.value
        console.log(cat)
        var newState = { ...this.state };
        newState.sortBy = cat;
        this.setState(newState);
    }
    render() {
      return (
        <div>
            <nav className="navbar navbar-dark bg-dark text-white">
                <a className="navbar-brand" href="#"><h1>Employee Lister</h1></a>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <div className = "container bg-secondary" style = {{width: "50%",padding:"30px"}}>
                <h3 className = "text-light">Search By Position</h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-light" type="button" onClick = {this.handleBtnClick}>Search</button>
                    </div>
                    <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon" defaultValue ="all" onChange = {this.handleFormChange}>
                        <option value = "all">See all</option>
                        <option value="engineer">Engineers</option>
                        <option value="accountant">Accountants</option>
                        <option value="programmer">Programmers</option>
                        <option value="secretary">Secretaries</option>
                    </select>
                </div>
                <br></br>
                <br></br>
                <h3 className = "text-light">Organize By</h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-light" type="button" onClick = {this.handleBtnClick}>Sort</button>
                    </div>
                    <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon" defaultValue ="all" onChange = {this.handleSortChange}>
                        <option defaultValue = "null">No Order</option>
                        <option value="asc">Age: Ascending</option>
                        <option value="dsc">Age: Descending</option>

                    </select>
                </div>
            </div>
            <br></br>
            <br></br>
            
            <Table
                people = {this.state.searched}
            />
        </div>
      )
    }
}
export default Home;
