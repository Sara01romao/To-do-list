import React from 'react';
import Todolist from './Todolist';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state= {itens:[], etxt:''};
  }

// método para o Submit do form

handleSubmit = (e) =>{
  e.preventDefault();
  if(!this.state.text.length){
    return;
  }
  const item ={
    text: this.state.text,
    id: Date.now()
  }
  this.setState(state=> ({
    itens: state.itens.concat(item),
    text:''

  }));
}

// método para Change do input

handleChange = (e)=>{
  this.setState({text: e.target.value});
}



  render(){
      return(
          <div>
            <h3>Tarefas</h3>
            <Todolist itens={this.state.itens}/>
            <br/>

            <form onSubmit={this.handleSubmit}>
            <input id="new-todo" 
              onChange={this.handleChange}
              value={this.state.text}
              />

              <button>Inserir</button>

            </form>
            
          </div>
      );
  }
}


export default App;
