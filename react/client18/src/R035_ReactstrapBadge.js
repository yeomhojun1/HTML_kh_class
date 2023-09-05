import React,{Component} from 'react';
import {Badge, Button} from 'reactstrap';

class R035_ReactstrapBadge extends Component {
  render() {
    return (
      <div>
<h1>product name <Badge color="secondary">hit</Badge></h1>
<Button color='dark' outline>
  accessor <Badge color="dark">4</Badge>
</Button>
<Badge color='danger' pill>pill</Badge>
<Badge href="http://naver.com" color='danger'>golink</Badge>
        </div>
    )
  }
}
export default R035_ReactstrapBadge;