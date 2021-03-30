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
        if(filter === "CLEAR_FILTERS"){
            this.getPortfolioItems();
        }else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null){
        axios.get('https://joaquinrosa.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          // handle success
          if (filter){
          this.setState({
              data: response.data.portfolio_items.filter(item => {
                return item.category === filter;
            })
          });
          } else {
            this.setState({
                data: response.data.portfolio_items
          })
        }
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
            <div className ="homepage-wrapper">
                
                <div className ="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>Clear All</button>
                </div>
                
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                    
                    {/* <button onClick={this.handlePageTitleUpdate}>Cambiar Título</button> */}
                </div>
            </div>
        )
    }
}