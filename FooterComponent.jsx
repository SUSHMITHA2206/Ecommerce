import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer" style={{color:'blue'}}>
                    <span className="text-muted" >All Rights Reserved 2023 @Ecommerce</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
