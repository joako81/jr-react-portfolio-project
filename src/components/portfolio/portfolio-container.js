import React, { Component } from "react";

import PortfolioItem from "./portolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        //instantiated
        this.state= {
            pageTitle: "Welcome to my portfolio",
            isloading: false,
            data: [
                {title: "Flexbox project", category: "eCommerce"},
                {title: "Dinner project", category: "Scheduling"},
                {title: "UML projects", category: "Enterprise"},
                {title: "Portfolio projects", category: "eCommerce"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
         /* vinculación para que funcione la función */
       /*  this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this) */
    }


    handleFilter(filter) { 
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    portfolioItems() {
        
        
        return this.state.data.map(item =>{
            return <PortfolioItem title={item.title} url={"una dirección"}/>;
        });
    }

/*     portfolioItems() {
        const data= ["Flexbox project", "Dinner project", "UML projects", "Portfolio projects"]
        
        return data.map(item =>{
            return <h1>{item}</h1>;
        });
    
    }
 */

handlePageTitleUpdate() {/* función cambio título */
    this.setState({
        pageTitle: "Updating Title..."
    });
}
   
    render() {
        if (this.state.isloading) {
            return <div>Loading...</div>
        }

        return(
            <div>
                <h2> {this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
            
                {this.portfolioItems()}

            {/*     <hr />

                <button onClick={this.handlePageTitleUpdate}>Cambiar Título</button> */}
            </div>
        )
    }
}