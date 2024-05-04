import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Product List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Id</th>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Available Quantity</th>
                                    <th>Category Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td> { product.productId} </td>   
                                             <td> {product.productName}</td>
                                             <td> {product.description}</td>
                                             <td>{product.availableQuantity}</td>
                                             <td>{product.categoryId}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-primary">View </button>
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

export default ListProductComponent




























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
