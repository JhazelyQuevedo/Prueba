import React, {Component, component} from 'react';
import api from './api';

class App extends Component{

state = {
   body: [], 
 }

  async componentDidMount(){
    const response = await api.get('body');


    this.setState({ body: response.data});
  }

  render (){
     const { body } = this.state;

     return(
      <div className="container">
        <h1 className="text-center mt-5">Descripcion de los posts</h1>
        <div className="row"> 
          {body.map(bod => (
           <h5>{bod.body} </h5> 
          
          
          )) } 
        </div>
      </div>
     );

  };

};

export default App;







//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App container">
      //</div>/<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
        //</header>/<a
          //className="App-link"
         // href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}


