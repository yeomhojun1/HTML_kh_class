import React,{Component} from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
    render(){
      
           let{
            String, n1,Boolean, Array, ObjectJson, Function
           }= this.props
        return (
       
            <div style={{padding:"0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {n1}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
              
            </div>
          
           
            )
    }
}
R018_PropsDatatype.propsTypes={
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,

}
export default R018_PropsDatatype;