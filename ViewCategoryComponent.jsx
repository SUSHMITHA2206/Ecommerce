import React, { Component } from 'react'
import CategoryService from '../services/CategoryService'

class ViewCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            category: {}
        }
    }

    componentDidMount(){
        CategoryService.getCategoryById(this.state.id).then( res => {
            this.setState({category: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
               
                <div className = "card col-md-6 offset-md-3 border border-primary">
                  
                    <h3 className = "text-center"> View category Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Category Id: </label>
                            <div> { this.state.category.categoryId }</div>
                        </div>
                        <div className = "row">
                            <label> Category Name: </label>
                            <div> { this.state.category.categoryName }</div>
                        </div>
                        <div className = "row">
                            <label>  Description: </label>
                            <div> { this.state.category.description }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
                  )
    }
}

export default ViewCategoryComponent










