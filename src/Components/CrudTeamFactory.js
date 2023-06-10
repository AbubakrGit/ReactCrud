import React, { Component } from 'react'

export default class CrudTeamFactory extends Component{
    constructor(props){
        super(props);
        this.state = {
            workers: [],
            selectedIndex: -1,
            text: "Create",
            color: "green"
        }
    }


  render() {

    const addWorkers = (event) => {
        event.preventDefault();

        let WorkId = event.target.WorkId.value;
        let WorkName = event.target.WorkName.value;
        let WorkPosition = event.target.WorkPosition.value;
        let WorkSalary = event.target.WorkSalary.value;

        const newWorkers = {
            id: WorkId,
            name: WorkName,
            position: WorkPosition,
            salary: WorkSalary
        }

        event.target.reset();

        if(this.state.selectedIndex>=0){
            this.state.workers[this.state.selectedIndex] = newWorkers
            this.state.selectedIndex = -1

            this.setState({
                text: "Create",
                color: "green"
            })
        }else{
            this.state.workers.push(newWorkers);
        }

        this.setState({
            workers: this.state.workers
        })

        console.log(this.state.workers)

    }


    const deleteWorkers = (index) => {
        this.state.workers.splice(index,1)

        this.setState({
            workers: this.state.workers
        })
    }


    const editWorkers = (index) => {
        this.setState({
            selectedIndex: index,
            text: "Save",
            color: "purple"
        })
    }

    const deleteAllWorkers = () => {
        this.state.workers = []

        this.setState({
            workers: this.state.workers
        })
    }


    return (
      <>
      <nav>
    <img className="main__img" src="../images/factory.jpg" alt=""></img>
    <div className="container">
        <div className="row">
            <div className="col-10 mt-3">
                <div className="card">
                    <form onSubmit={addWorkers}>
                        <div className="card-body">
                            <div className="col-12">
                                <input type="number" className="form-control" placeholder="ID"
                                name="WorkId"></input>
                            </div>
                            <div className="col-12 mt-3">
                                <input type="text" placeholder="Worker Name" className="form-control" name="WorkName"></input>
                            </div>
                            <div className="col-4 mt-5">
                                <input type="text" placeholder="Position" className="form-control col-2 d-block" name="WorkPosition"></input>
                                <input type="number" placeholder="Salary" className="form-control col-2 d-block ml-auto" name="WorkSalary"></input>
                            </div>
                        
                        <div className="buttons mt-3">
                            <button type='submit' className="btn" style={{background: `${this.state.color}`}}>{this.state.text}</button>
                        </div>
                        </div>
                    </form>
                            <button  onClick={() => deleteAllWorkers()} className="btn btn-danger">Delete All</button>
                </div>
            </div>
        </div>
    </div>
    
    
    
</nav>
    
    
    
    
<header className='mt-5'>
    <div className="container">
        <div className="row">
            <div className="col-10 mt-5">
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Worker Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
    
                    <tbody>
                    {this.state.workers.map((item,index) => {
                        return (
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.salary}</td>
                            <td><button><img onClick={() => editWorkers(index)} className='images' src='../images/pencil.jpg'></img></button></td>
                            <td><button><img onClick={() => deleteWorkers(index)} className='images' src='../images/trash.jpg'></img></button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
        
            </div>
        </div>
    
    </div>
</header>
      </>
    )
  }
}
