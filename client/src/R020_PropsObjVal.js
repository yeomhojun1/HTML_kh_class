import React,{ Component} from 'react';
import datatype from 'prop-types';
import { data } from 'jquery';
class R020_PropsObjVal extends Component{

    render(){
           let{
           Object Json
           }= this.props
        return (
            <div style={{padding: "0px"}}>
                {Json.stringify(Object Json)}
            </div>
            )
    }
}
R020_PropsObjVal.propsTypes={
    Object Json: datatype.shape({
    React: datatype.string,
    twohundred: datatype.number
   })

}
export default R020_PropsObjVal;