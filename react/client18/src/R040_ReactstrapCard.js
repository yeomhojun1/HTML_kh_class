import React,{Component} from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button } from 'reactstrap';

class R040_ReactstrapCard extends Component {
  
  render() {
    return (
      <div>
        <Card>
        <CardImg top height={"200px"} src="http://asq.kr/4KkfRxZfR"/>
      <CardBody>
<CardTitle>card 제목</CardTitle>
<CardSubtitle>card 부제목</CardSubtitle>
<CardText>card 내용</CardText>
<button>버튼</button>
      </CardBody>


        </Card>
      
      </div>
    )
  }
}
export default R040_ReactstrapCard;