import React, { Component } from 'react'
import CategoryService from '../services/CategoryService';

class CreateCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

           id: this.props.match.params.id,
            categoryId:'',
            categoryName:'',
            description:''
        }
        this.changeCategoryIdHandler = this.changeCategoryIdHandler.bind(this);
        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateCategory = this.saveOrUpdateCategory.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
          CategoryService.getCategoryById(this.state.id).then( (res) =>{
                let  category = res.data;
                this.setState({
                    categoryId:category.categoryId,
                    categoryName:category.categoryName,
                    description:category.description

                });
            });
        }        
    }
    saveOrUpdateCategory = (e) => {
        e.preventDefault();
        let category = {categoryId: this.state.categoryId, categoryName: this.state.categoryName, description: this.state.description
            };
        console.log('category => ' + JSON.stringify(category));
        console.log('id => ' + JSON.stringify(this.state.id));
        // step 5
        if(this.state.id === '_add'){
            CategoryService. createCategory(category).then(res =>{
                this.props.history.push('/categories');
            });
        }else{
            CategoryService.updateCategory(category, this.state.id).then( res => {
                this.props.history.push('/categories');
            });
        }
    }
    
    changeCategoryIdHandler= (event) => {
        this.setState({categoryId: event.target.value});
    }

    changeCategoryNameHandler= (event) => {
        this.setState({categoryName: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
   

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add category</h3>
        }else{
            return <h3 className="text-center">Update Category</h3>
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
                                            <label> Category Id </label>
                                            <input placeholder="cateId" name="cateId" className="form-control border border-primary" 
                                                value={this.state.categoryId} onChange={this.changeCategoryIdHandler}/>
                                        </div>
                                        <div className = "form-group ">
                                            <label> category Name </label>
                                            <input placeholder="cateName" name="cateName" className="form-control border border-primary" 
                                                value={this.state.categoryName} onChange={this.changeCategoryNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description </label>
                                            <input placeholder="descp" name="descp" className="form-control border border-primary" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCategory}>Save</button>
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

export default CreateCategoryComponent


























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
