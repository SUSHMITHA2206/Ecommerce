import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id).then( res => {
            this.setState({order: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
               
                <div className = "card col-md-6 offset-md-3 border border-primary">
                  
                    <h3 className = "text-center"> View Order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Order Number: </label>
                            <div> { this.state.order.ord_Id }</div>
                        </div>
                        <div className = "row">
                            <label> Order Name: </label>
                            <div> { this.state.order.ordName }</div>
                        </div>
                        <div className = "row">
                            <label>  Quantity: </label>
                            <div> { this.state.order.quantity }</div>
                        </div>
                        <div className = "row">
                            <label> Price of an Item: </label>
                            <div> { this.state.order.priceItem }</div>
                        </div>
                        <div className = "row">
                            <label> Total Order: </label>
                            <div> { this.state.order.tord }</div>
                        </div>
                        <div className = "row">
                            <label> Gst :</label>
                            <div> { this.state.order.gst }</div>
                        </div>
                        <div className = "row">
                            <label> Tax: </label>
                            <div> { this.state.order.ttax }</div>
                        </div>
                        <div className = "row">
                            <label> Total price including tax :</label>
                            <div> { this.state.order.tpit }</div>
                        </div>

                    </div>

                </div>
            </div>
                  )
    }
}

export default ViewOrderComponent










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
