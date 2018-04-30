import React from 'react';
import {connect} from 'react-redux';
import './stockList.css';
import { createStock, fetchStock, deleteStock } from '../../actions/stockActions';
import StockCard2 from './stockCard2';

export class StockList extends React.Component {
  componentDidUpdate() {
    if(this.props.userId && this.props.stocks.length <= 0) {
      console.log(this.props);
      this.props.dispatch(fetchStock(this.props.userId, this.props.authToken))
    } 
  }
 
 

  render() {
    const stocks = this.props.stocks[37];
    console.log(stocks);

    const stockCard = this.props.stocks.map((stock, index) => {
      return (
        <div>
        <StockCard2 
          key={index}
          symbol={stock.symbol}
          companyName={stock.companyName}
          primaryExchange={stock.primaryExchange}
          sector={stock.sector}
          open={stock.open}
          latestPrice={stock.latestPrice}
        />
        <button>test</button>
        </div>
      );
    });
    
    return (
      <div>
          {/* <h3>{this.props.searchedStock.companyName}</h3>
          <div>
            {this.props.searchedStock.symbol} <br/>
            {this.props.searchedStock.open} <br/>
            {this.props.searchedStock.latestPrice} <br/>
          </div>
          <button 
            className="addStock-button"
            onClick={() => this.props.dispatch(createStock(this.props.searchedStock, this.props.userId, this.props.authToken))}
          >Add stock</button> */}
          {/* <button label="Delete" value="Delete" onClick={() => this.props.dispatch(deleteStock())}>Delete</button> */}
      
          {/* {this.props.stocks.map((stock, index) => <li key={index}>{stock.companyName}</li>)} */}

          {stockCard}
          
      </div>
    );
  }
  
};

const mapStateToProps = state => {
  console.log(state);
  return {
  
  searchedStock: state.stockReducer.searchedStock,
  userId: state.user.userId,
  authToken: state.user.authToken,
  stocks: state.stockReducer.stocks
}};

export default connect(mapStateToProps)(StockList);