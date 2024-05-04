import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            products: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
               
                <div className = "card col-md-6 offset-md-3 border border-primary">
                  
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Number: </label>
                            <div> { this.state.products.productId }</div>
                        </div>
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.products.productName }</div>
                        </div>
                        <div className = "row">
                            <label> Available Quantity: </label>
                            <div> { this.state.products.availableQuantity }</div>
                        </div>
                        <div className = "row">
                            <label> Description </label>
                            <div> { this.state.products.description }</div>
                        </div>
                        <div className = "row">
                            <label> Category Id </label>
                            <div> { this.state.products.categoryId }</div>
                        </div>
                        

                    </div>

                </div>
            </div>
                  )
    }
}

export default ViewProductComponent










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
