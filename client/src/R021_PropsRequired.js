import React,{ Component} from 'react';
import datatype from 'prop-types';
import { data } from 'jquery';
class R021_PropsRequired extends Component{

    render(){
           let{
          ReactString,
          ReactNumber
           }= this.props
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
            )
    }
}
R021_PropsRequired.propsTypes={
   ReactNumber: datatype.isRequired,
   }


export default R021_PropsRequired;