import React,{Component} from 'react';
import { Form, Label, Input,Row, Col, FormGroup} from 'reactstrap';



  class R044_ReactstrapForm extends Component {
   
  render() {
    return (
      <Form>
        <Label for='exampleGender'>gender</Label>
<Input type='select' bsSize='lg'>
  <option>no select</option>
  <option>woman</option>
  <option>man</option>
</Input>
<Row Form>
      <Col md={6}>
        <FormGroup>
          <Label for='exampleAddress'>address</Label>
          <Input type='text' name='address' id='address'/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for='exampleMobile'>Mobile</Label>
          <Input type='text' name='Mobile' id='Mobile'/>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label for='exampleAge'>Age</Label>
          <Input type='text' name='Age' id='Age'/>
        </FormGroup>
      </Col>


</Row>


      </Form>
    )
  }
}
export default R044_ReactstrapForm;