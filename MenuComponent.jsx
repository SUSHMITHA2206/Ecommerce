import React,{Component} from "react";
import {Link, Route, Routes} from 'react-router-dom';

class MenuComponent extends Component {
   
    render(){
        return(
        
            <div className="btn-group btn-group-justified">
                <div className="btn-group">
                <Link to="/customers">
                <button className="btn btn-primary">Customers</button>
                </Link>
                </div>
                <div className="btn-group">
                    <Link to="/products">
                    <button className="btn btn-primary">Products</button>
                    </Link>
                </div>
                <div className="btn-group">
                <Link to="/categories">
                <button className="btn btn-primary">Categories</button>
                </Link>
                </div>
                <div className="btn-group">
                <Link to="/orders">
                <button className="btn btn-primary">Orders</button>
                </Link>
                </div>
                <div className="btn-group">
                    
                 <button className="btn btn-primary">Search</button>
                </div>
            

            </div>
              )
    }
}
export default MenuComponent