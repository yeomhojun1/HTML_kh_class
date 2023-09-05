import React,{Component} from 'react';
import { ListGroup,ListGroupItem,Badge} from 'reactstrap';
  class R047_ReactstrapInputListGroup extends Component {
  render() {
    return (
     <ListGroup>
      <ListGroupItem color='danger' className="justify-content-between">Badge <Badge pill>200</Badge></ListGroupItem>
      <ListGroupItem disabled tag="a" href="#">disabled</ListGroupItem>
      <ListGroupItem tag="a" href='http://naver.com'>link</ListGroupItem>
      <ListGroupItem tag="button" action onClick={e => alert("button")}>button</ListGroupItem>
     </ListGroup>
    )
  }
}
export default R047_ReactstrapInputListGroup;