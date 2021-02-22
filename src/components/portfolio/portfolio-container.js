import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        //instantiated
        this.state= {
            pageTitle: "Welcome to my portfolio",
            isloading: false,
            data: []
            
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

    getPortfolioItems(){
        axios.get('https://joaquinrosa.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          // handle success
          console.log("Respuesta", response);
          this.setState({
              data: response.data.portfolio_items
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
      }
    portfolioItems() {
       
                return this.state.data.map(item =>{
            return (
             <PortfolioItem 
               key={item.id}
               item={item}
               />
            );    
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
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
            
                <div className="portfolio-items-wrapper">
                {this.portfolioItems()}
                </div>
            {/*     <hr />

                <button onClick={this.handlePageTitleUpdate}>Cambiar Título</button> */}
            </div>
        )
    }
}