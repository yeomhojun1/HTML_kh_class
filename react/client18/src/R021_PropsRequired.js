import React,{ Component} from 'react';
import datatype from 'prop-types';

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
    ReactString: datatype.any.isRequired,
   }


export default R021_PropsRequired;