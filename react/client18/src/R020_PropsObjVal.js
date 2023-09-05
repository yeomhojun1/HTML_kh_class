import React,{ Component} from 'react';
import datatype from 'prop-types';
import $ from 'jquery';
class R020_PropsObjVal extends Component{

    render(){
           let{
           ObjectJson
           }= this.props
        return (
            <div style={{padding: "0px"}}>
                {Json.stringify(ObjectJson)}
            </div>
            )
    }
}
R020_PropsObjVal.propsTypes={
    ObjectJson: datatype.shape({
    React: datatype.string,
    twohundred: datatype.number
   })

}
export default R020_PropsObjVal;