import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class CreateCustomersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

            id: this.props.match.params.id,
            custId:'',
            firstName:'',
            lastName:'',
            address:'',
            email:'',
            mobile:''
        }
        this.changeCustIdHandler = this.changeCustIdHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) =>{
                let  customer = res.data;
                this.setState({
                    custId: customer.custId,
                    firstName: customer.firstName,
                    lastName : customer.lastName,
                    address:customer.address,
                    email:customer.email,
                    mobile:customer.mobile

                });
            });
        }        
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {custId: this.state.custId, firstName: this.state.firstName, lastName: this.state.lastName,address:this.state.address,email:this.state.email,mobile:this.state.mobile};
        console.log('customer => ' + JSON.stringify(customer));
        console.log('id => ' + JSON.stringify(this.state.id));
        // step 5
        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }else{
           CustomerService.updateCustomer(customer, this.state.id).then( res => {
                this.props.history.push('/customers');
            });
        }
    }
    
    changeCustIdHandler= (event) => {
        this.setState({custId: event.target.value});
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 border border-primary">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Id: </label>
                                            <input placeholder="custId" name="custId" className="form-control border border-primary" 
                                                value={this.state.custId} onChange={this.changeCustIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> FirstName: </label>
                                            <input placeholder="firstName" name="firstName" className="form-control border border-primary" 
                                                value={this.state.firstName } onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> LastName: </label>
                                            <input placeholder="lastName" name="lastName" className="form-control border border-primary" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="address" name="address" className="form-control border border-primary" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="email" className="form-control border border-primary" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> mobile: </label>
                                            <input placeholder="mobile" name="mobile" className="form-control border border-primary" 
                                                value={this.state.mobile} onChange={this.changeMobileHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
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

export default CreateCustomersComponent


























//import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService';







// class CreateEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // step 2
//             id: this.props.match.params.id,
//             firstName: '',
//             lastName: '',
//             emailId: ''
//         }
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
//     }

//     // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
//                 let employee = res.data;
//                 this.setState({firstName: employee.firstName,
//                     lastName: employee.lastName,
//                     emailId : employee.emailId
//                 });
//             });
//         }        
//     }
//     saveOrUpdateEmployee = (e) => {
//         e.preventDefault();
//         let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
//         console.log('employee => ' + JSON.stringify(employee));

//         // step 5
//         if(this.state.id === '_add'){
//             EmployeeService.createEmployee(employee).then(res =>{
//                 this.props.history.push('/employees');
//             });
//         }else{
//             EmployeeService.updateEmployee(employee, this.state.id).then( res => {
//                 this.props.history.push('/employees');
//             });
//         }
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

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Employee</h3>
//         }else{
//             return <h3 className="text-center">Update Employee</h3>
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
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

//                                         <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

// export default CreateEmployeeComponent
