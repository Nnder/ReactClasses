import React, { ChangeEvent, Component } from 'react';
import './App.css';

interface Param {
  id: number;
  name: string;
  type?: "string" | "number";
}

interface ParamValue {
  paramId: number;
  value: string;
}

type Color = 'red' | 'blue'

interface Model {
  paramValues: ParamValue[];
  colors?: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  params: Param[],
  model: Model,
}

class ParamEditor extends Component<Props, State> {

  constructor(props : Props) {
    super(props);

    this.state = {
      params: props.params,
      model: props.model,
    }
  }

  private handleChange(index: number, event: ChangeEvent<HTMLInputElement>){
    const newState: State = {...this.state}
    newState.model.paramValues[index].value = event.target.value
    this.setState(newState)
  }

  private getModel(): Model {
    return this.state.model
  }

  private findParam(param: Param) : string{
    const paramValue = this.state.model.paramValues.find( 
      (paramValue : ParamValue) => paramValue.paramId === param.id)?.value || ""

    return paramValue
  }

  render() {
    return (
      <div>
        {this.state.params.map((param: Param, index)=>(
          <div style={{display: 'flex'}} key={param.id}>
            <div style={{margin: '5px'}}>{param.name}</div>
            <input type="text" 
            value={ this.findParam(param) }
            onChange={(e)=>this.handleChange(index, e)}
              />
          </div>
        ))}
        
        <div>
          <button onClick={()=>console.log(this.getModel())} >getModel()</button>
          <pre>{JSON.stringify(this.getModel())}</pre>
        </div>
      </div>
    );
  }
}



export default ParamEditor;