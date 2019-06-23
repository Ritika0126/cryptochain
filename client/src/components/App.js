import React , {Component} from 'react';
import Blocks from './Blocks';
import {Link} from 'react-router-dom';
import bitcoin from '../assets/bitcoin.png';

class App extends Component{

    state={walletInfo: {}};

    componentDidMount(){
        fetch(`${document.location.origin}/api/wallet-info`)
        .then(response=> response.json())
        .then(json => this.setState({walletInfo: json}));
    
    }
   render() {

    const {address, balance}=this.state.walletInfo;
       return(
           <div className='App'>
               <img className='bitcoin' src={bitcoin}></img>
               <br />
               <div>
               Welcome to the blockchain...
               </div>
               <br />
               <div><Link to='/blocks'>Blocks</Link></div>
               <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
               <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
               <br />
               <div className='WalletInfo'>
                <div>address: {address}</div>
                <div>Balance: {balance}</div>
               </div>
           </div>
       );
   }
}

export default App;