import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

            id: this.props.match.params.id,
           productId:'',
           productName:'',
           description:'',
           availableQuantity:'',
           categoryId:''

        }
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeAvailableQuantityHandler=this.changeAvailableQuantityHandler.bind(this);
        this.changeCategoryIdHandler=this.changeCategoryIdHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
          ProductService.getProductById(this.state.id).then( (res) =>{
                let  product = res.data;
                this.setState({
                    productId:product.productId,
                    productName:product.productName,
                    description:product.description,
                    availableQuantity:product.availableQuantity,
                    categoryId:product.categoryId

                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {productId: this.state.productId, productName: this.state.productName, description: this.state.description,availableQuantity:this.state.availableQuantity
        ,categoryId:this.state.categoryId
            };
        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        // step 5
        if(this.state.id === '_add'){
           ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeProductIdHandler= (event) => {
        this.setState({productId: event.target.value});
    }

    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeAvailableQuantityHandler= (event) => {
        this.setState({availableQuantity: event.target.value});
    }
    changeCategoryIdHandler= (event) => {
        this.setState({categoryId: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Products</h3>
        }else{
            return <h3 className="text-center">Update Products</h3>
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
                                <div className = "card-body ">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Id </label>
                                            <input placeholder="productId" name="prodId" className="form-control border border-primary" 
                                                value={this.state.productId} onChange={this.changeProductIdHandler}/>
                                        </div>
                                        <div className = "form-group ">
                                            <label> product Name </label>
                                            <input placeholder="productName" name="prodName" className="form-control border border-primary" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="description" name="description" className="form-control border border-primary" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Available Quantity </label>
                                            <input placeholder="availableQuantity" name="availableQuantity" className="form-control border border-primary" 
                                                value={this.state.availableQuantity} onChange={this.changeAvailableQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category Id </label>
                                            <input placeholder="categoryId" name="categoryId" className="form-control border border-primary" 
                                                value={this.state.categoryId} onChange={this.changeCategoryIdHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default CreateProductComponent


























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
