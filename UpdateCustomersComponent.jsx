import React, { Component } from 'react'
import ViolationService from '../services/ViolationService';

class UpdateViolationComponent extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            // step 2

            id: this.props.match.params.id,
            vno: '',
            vcat: '',
            amount: '',
            location:'',
            vdate:''
        }
        this.changeVnoHandler = this.changeVnoHandler.bind(this);
        this.changeVcatHandler = this.changeVcatHandler.bind(this);
        this.changeAmountHandler=this.changeAmountHandler.bind(this);
        this.changeLocationHandler=this.changeLocationHandler.bind(this);
        this.changeVdateHandler=this.changeVdateHandler.bind(this);
        this.updateViolation= this.updateViolation.bind(this);
    }

    componentDidMount(){
        ViolationService.getViolationById(this.state.id).then( (res) =>{
            let  violation = res.data;
            this.setState({
                vno: violation.vno,
                vcat: violation.vcat,
                location : violation.location,
                amount:violation.amount,
                vdate:violation.vdate

            });
        });
    }

    updateViolation = (e) => {
        e.preventDefault();
        let violation = {vno: this.state.vno, vcat: this.state.vcat, amount:this.state.amount,location: this.state.location,vdate:this.state.vdate};
        console.log('violations => ' + JSON.stringify(violation));
        console.log('id => ' + JSON.stringify(this.state.id));
        ViolationService.updateViolation(violation, this.state.id).then( res => {
            this.props.history.push('/violations');
        });
    }
    
    changeVnoHandler= (event) => {
        this.setState({vno: event.target.value});
    }

    changeVcatHandler= (event) => {
        this.setState({vcat: event.target.value});
    }

    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }
    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }
    changeVdateHandler= (event) => {
        this.setState({vdate: event.target.value});
    }

    cancel(){
        this.props.history.push('/violations');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Vno: </label>
                                            <input placeholder="vno" name="vno" className="form-control" 
                                                value={this.state.vno} onChange={this.changeVnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> vcat </label>
                                            <input placeholder="vcat" name="vcat" className="form-control" 
                                                value={this.state.vcat } onChange={this.changeVcatHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount </label>
                                            <input placeholder="Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location </label>
                                            <input placeholder="location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> vdate </label>
                                            <input placeholder="vdate" name="vdate" className="form-control" 
                                                value={this.state.vdate} onChange={this.changeVdateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateViolation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateViolationComponent


























// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService';

// class UpdateEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             firstName: '',
//             lastName: '',
//             emailId: ''
//         }
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.updateEmployee = this.updateEmployee.bind(this);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
//             let employee = res.data;
//             this.setState({firstName: employee.firstName,
//                 lastName: employee.lastName,
//                 emailId : employee.emailId
//             });
//         });
//     }

//     updateEmployee = (e) => {
//         e.preventDefault();
//         let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
//         console.log('employee => ' + JSON.stringify(employee));
//         console.log('id => ' + JSON.stringify(this.state.id));
//         EmployeeService.updateEmployee(employee, this.state.id).then( res => {
//             this.props.history.push('/employees');
//         });
//     }
    
//     changeFirstNameHandler= (event) => {
//         this.setState({firstName: event.target.value});
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value});
//     }

//     changeEmailHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/employees');
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 <h3 className="text-center">Update Employee</h3>
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> First Name: </label>
//                                             <input placeholder="First Name" name="firstName" className="form-control" 
//                                                 value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Last Name: </label>
//                                             <input placeholder="Last Name" name="lastName" className="form-control" 
//                                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Email Id: </label>
//                                             <input placeholder="Email Address" name="emailId" className="form-control" 
//                                                 value={this.state.emailId} onChange={this.changeEmailHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default UpdateEmployeeComponent
