import React,{ Component} from 'react';

class R027_ComponentClass extends Component{
constructor (props){
    super(props);
    this.state ={
        StateString:'react',
        StateArrayObj: ['react',{react: '200'}]
    }
}
buttonClick = (type) =>{
    if(type ==='String'){
        this.setState({StateString:'react'});
    }else{
        this.setState({StateArrayObj:['react', {react: '200'}]})
    }
}
    render(){
         console.log('render() 실행')
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e)=> this.buttonClick('String')}>문자열 변경</button><br/>
                <button onClick={(e)=> this.buttonClick('ArrayObject')}>객체 배열 변경</button>
                {/* StateString : {this.state.StateString},{this.state.StateArrayObj} */}
            </div>
            )
    }
}



export default R027_ComponentClass;