import axios from 'axios';
import React, { Component } from 'react';

export default class PortfolioDetail extends Component {
  constructor(props){
      super(props);
    
      this.state ={
          portfolioItem:{}
      }

    }   

    getPortfolioItem() {
        axios.get (`https://joaquinrosa.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`
        , {withCredentials:true}
        ).then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
            
        }).catch(error =>{ console.log("Get PorfolioItem error", error);})
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    render() {
        const { 
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            logo
        } = this.state.portfolioItem;
        
        return (
            <div className="portfolio-detail-wrapper">
              <div className="banner">
                <img src={logo_url} />
              </div>
          
              <div className="portfolio-detail-description-wrapper">
                <div classNaem="description">{description}</div>
              </div>
          
              <div className="bottom-content-wrapper">
                <a href={url} className="site-link" target="_blank">
                  Visit {name}
                </a>
              </div>
            </div>
          ); 
    }
}