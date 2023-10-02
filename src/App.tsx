//#Basic React
import React from 'react';
import './App.scss'; //Style

//#Font Awesome (Icons)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface WidgetProps
{
  name : string
  Position? : Vector
}

interface WidgetState
{
  name: string
  Position: Vector
}

class Vector
{
  public x : number = 0;
  public y : number = 0;

  public toString() : string
  {
    return `${this.x}x${this.y}`;
  }

  constructor(x : number = 0, y : number = 0)
  {
    this.x = x;
    this.y = y;
  }
}

class Widget extends React.Component<WidgetProps, WidgetState>
{
  render(): React.ReactNode
  {
    var positionStyle : React.CSSProperties = {
      left: `${this.state.Position.x}px`,
      top: `${this.state.Position.y}px`
    };
    
    return (
      <div className='widget' style={positionStyle}>
        <h2 className='widget-meta-ing-marg'>{this.state.name}</h2>
        <FontAwesomeIcon className='widget-delete widget-action' icon={faTrash}/>
        <FontAwesomeIcon className='widget-delete widget-action' icon={faTrash}/>

        <button className='widget-run'>Run</button>
      </div>
    )
  }

  constructor(props : WidgetProps)
  {
    super(props);

    this.state = {
      name: props.name,
      Position: props.Position || new Vector(0, 0)
    };    
  }
}

function App()
{
  return (
    <div className="App">
      <h1 id="main-title">Qwidgeter</h1>

      <Widget name='Hello World'/>
    
    </div>
  );
}

export default App;
