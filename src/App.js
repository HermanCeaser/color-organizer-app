import React, {Component} from 'react';
import './App.css';
import AddColorForm from './Components/addColorFrom'
import ColorList from './Components/color/colorList'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
    this.addColor = this.addColor.bind(this);
  }

  addColor(title, color){
    const colors = [
      ...this.state.colors,
      {
        id: this.pRG(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  //Pseudo random generator for ids
  pRG = () => 1 + (100-1)*Math.random();

  //Add a Color rating to the color object in the array
  rateColor = (id, rating) => {
    const colors = this.state.colors.map(color => 
      (color.id !== id)?
      color: 
      {...color, rating}
      )
    this.setState({colors})
  }

  //Remove a color from the Array
  removeColor = (id) => {
    const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors})
    }
  

  render(){
    const {colors} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="card  border-0 my-1">
              <div className="card-body border-0 bg-dark d-inline rounded-pill text-white text-center">
                Color Organizer App
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card shadow  my-2">
                <div className="card-header">Manage Your Colors</div>
                <div className="card-body border-0 ">
                  <AddColorForm onNewColor = {this.addColor}/>
                  <div className="row">
                    <ColorList colors={colors} onRate={this.rateColor} onRemove={this.removeColor}/>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
