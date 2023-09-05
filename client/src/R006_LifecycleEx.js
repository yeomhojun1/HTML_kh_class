import React,{ Component} from 'react';

class R006_LifecycleEx extends Component{
    static getDerivedStateFromPorps(props,state){
        console.log('2.getDerivedStateFromPorps Call :'+props.prop_value);
    }
    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructor Call');
    }
    render(){
            console.log('3.render Call');
        return (
            <h2>[THIS IS constructor FUCNTION]</h2>
        );
    }
}
export default R006_LifecycleEx;