import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 border border-primary">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Id:</label>
                            <div> { this.state.customer.custId }</div>
                        </div>
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.customer.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.customer.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.customer.address }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.customer.email }</div>
                        </div>
                        <div className = "row">
                            <label> mobile: </label>
                            <div> { this.state.customer.mobile }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomersComponent










// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'

// class ViewEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             employee: {}
//         }
//     }

//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then( res => {
//             this.setState({employee: res.data});
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Employee Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Employee First Name: </label>
//                             <div> { this.state.employee.firstName }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Employee Last Name: </label>
//                             <div> { this.state.employee.lastName }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Employee Email ID: </label>
//                             <div> { this.state.employee.emailId }</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewEmployeeComponent
