import React,{Component} from 'react';
import './index.css'
import Plan from './Plan'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    state = {
        items : [],
        text : ""
    }
    handleChange = e =>{
        this.setState({text : e.target.value})
    }
    handleAdd = e =>{
      if(this.state.text !== ""){
          const items = [...this.state.items , this.state.text];
          this.setState({items : items, text: ""});
      }
    }
    handleDelete  = id =>{
        console.log("Delete",id);
        const Olditems = [...this.state.items]
        console.log("Olditems",Olditems);
        const items = Olditems.filter((element, i ) =>{
            return i !== id
        })
        this.setState({items:items});
    }
    render(){
    return (
        <div className = "container-fluid my-5">
           <div className="row">
               <div className="col-sm-5 mx-auto shadow-lg p-3">
                   
                   <h2 className="text-center"> TO DO List</h2>
                   <div className="row">
                       <div className="col-9">
                           <input type="text" className="from-control col-12" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange}/>
                           

                       </div>
                       <div className="col-2">
                           <button className="btn btn-warning px-5 " onClick={this.handleAdd}>Add</button>
                       </div>
                       <div className="conatiner-fluid">
                           <ul className="list-unstyled row m-5">
                              {
                                  this.state.items.map((value , i)=>{
                                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                                  })
                              }
                           </ul>
                       </div>
                   </div>
                   
                </div>  
            </div>
        </div>
    )
}
}
export default App;
