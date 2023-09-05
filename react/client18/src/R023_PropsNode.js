import React,{ Component} from 'react';
import datatype from 'prop-types';
import $ from 'jquery';
class R023_PropsNode extends Component{

    render(){
         
        return (
            <div style={{padding: "0px"}}>
               {this.props.children}
            </div>
            )
    }
}
R023_PropsNode.propsTypes={
    ReactString: datatype.isRequired,
   }


export default R023_PropsNode;