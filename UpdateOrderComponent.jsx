import React, { Component } from 'react'
import OrderService from '../services/OrderService';

class UpdateOrderComponent extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            // step 2

            id: this.props.match.params.id,
            ordId: '',
            ordName:'' ,
             quantity :'',
             priceItem:'',
            tord:'',
            gst:'',
            ttax:'',
             tpit:''
        }
        this.changeOrdnoHandler = this.changeOrdnoHandler.bind(this);
        this.changeOrderNameHandler = this.changeOrderNameHandler.bind(this);
        this.changequantityHandler=this.changequantityHandler.bind(this);
        this.changePriceitemHandler=this.changePriceitemHandler.bind(this);
        this.changeTordHandler=this.changeTordHandler.bind(this);
        this.changeGstHandler=this.changeGstHandler.bind(this);
        this.changeTtaxHandler=this.changeTtaxHandler.bind(this);
        this.changeTpitHandler=this.changeTpitHandler.bind(this);
        this.updateOrder= this.updateOrder.bind(this);
    }

    componentDidMount(){
       OrderService.getOrderById(this.state.id).then( (res) =>{
            let  order = res.data;
            this.setState({
                    ordId: order.ordId,
                    ordName: order.ordName,
                    quantity : order.quantity,
                    priceItem:order.priceItem,
                    tord:order.tord,
                    gst:order.gst,
                    ttax:order.ttax,
                    tpit:order.tpit

            });
        });
    }

    updateOrder = (e) => {
        e.preventDefault();
        let order = {ordId: this.state.ordId, ordName: this.state.ordName, quantity:this.state.quantity,priceItem: this.state.priceItem,tord:this.state.tord,gst:this.state.gst,ttax:this.state.ttax,tpit:this.state.tpit};
        console.log('orders => ' + JSON.stringify(order));
        console.log('id => ' + JSON.stringify(this.state.id));
        OrderService.updateOrder(order, this.state.id).then( res => {
            this.props.history.push('/orders');
        });
    }
    
    changeOrdnoHandler= (event) => {
        this.setState({ordId: event.target.value});
    }

    changeOrderNameHandler= (event) => {
        this.setState({ordName: event.target.value});
    }

    changequantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }
    changePriceitemHandler= (event) => {
        this.setState({priceItem:event.target.value});
    }
    changeTordHandler= (event) => {
        this.setState({tord: event.target.value});
    }
    changeGstHandler= (event) => {
        this.setState({gst: event.target.value});
    }
    changeTtaxHandler= (event) => {
        this.setState({ttax: event.target.value});
    }
    changeTpitHandler= (event) => {
        this.setState({tpit: event.target.value});
    }
    cancel(){
        this.props.history.push('/orders');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Order</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                    <label> order Id: </label>
                                            <input placeholder="ordId" name="ordId" className="form-control" 
                                                value={this.state.ordId} onChange={this.changeOrdnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> order Name: </label>
                                            <input placeholder="ordName" name="ordName" className="form-control" 
                                                value={this.state.ordName } onChange={this.changeOrderNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Quantity </label>
                                            <input placeholder="quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Price Item </label>
                                            <input placeholder="priceItem" name="priceItem" className="form-control" 
                                                value={this.state.priceItem} onChange={this.changePriceitemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Total Order </label>
                                            <input placeholder="tord" name="tord" className="form-control" 
                                                value={this.state.tord} onChange={this.changeTordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gst </label>
                                            <input placeholder="gst" name="gst" className="form-control" 
                                                value={this.state.gst} onChange={this.changeGstHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ttax </label>
                                            <input placeholder="ttax" name="ttax" className="form-control" 
                                                value={this.state.ttax} onChange={this.changeTtaxHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> tpit </label>
                                            <input placeholder="tpit" name="tpit" className="form-control" 
                                                value={this.state.tpit} onChange={this.changeTpitHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateOrder}>Save</button>
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

export default UpdateOrderComponent


























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
