import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ListOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    deleteOrder(id){
        OrderService.deleteOrder(id).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.id !== id)});
        });
    }
    viewOrder(id){
        this.props.history.push(`/view-order/${id}`);
    }
    editOrder(id){
        this.props.history.push(`/add-order/${id}`);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data});
        });
    }

    addOrder(){
        this.props.history.push('/add-order/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Order List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Order Number</th>
                                    <th>Order Name</th>
                                    <th>Quantity</th>
                                    <th>Price Item</th>
                                    <th>Tord</th>
                                    <th>gst</th>
                                    <th>total tax</th>
                                    <th>Total tax including tax</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.id}>
                                             <td> { order.ordId} </td>   
                                             <td> {order.ordName}</td>
                                             <td> {order.quantity}</td>
                                             <td> {order.priceItem}</td>
                                             <td> {order.tord}</td>
                                             <td> {order.gst}</td>
                                             <td> {order.ttax}</td>
                                             
                                             <td> {order.tpit}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.id)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListOrderComponent




























// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'

// class ListEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 employees: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }

//     deleteEmployee(id){
//         EmployeeService.deleteEmployee(id).then( res => {
//             this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
//         });
//     }
//     viewEmployee(id){
//         this.props.history.push(`/view-employee/${id}`);
//     }
//     editEmployee(id){
//         this.props.history.push(`/add-employee/${id}`);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployees().then((res) => {
//             this.setState({ employees: res.data});
//         });
//     }

//     addEmployee(){
//         this.props.history.push('/add-employee/_add');
//     }

//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">Employees List</h2>
//                  <div className = "row">
//                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
//                  </div>
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                     <th> Employee First Name</th>
//                                     <th> Employee Last Name</th>
//                                     <th> Employee Email Id</th>
//                                     <th> Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.employees.map(
//                                         employee => 
//                                         <tr key = {employee.id}>
//                                              <td> { employee.firstName} </td>   
//                                              <td> {employee.lastName}</td>
//                                              <td> {employee.emailId}</td>
//                                              <td>
//                                                  <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         )
//     }
// }

// export default ListEmployeeComponent
