import React,{Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';


  const items=[
    {
      src:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gbTqB.img?w=1920&h=1080&q=60&m=2&f=jpg',
      altText: '슬라이드1 이미지 대체 문구',
      caption: '슬라이드 1 설명',
      header: '슬라이드1 제목'
    },
    {
      src:'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9935E9355DDE743F24',
      altText: '슬라이드2 이미지 대체 문구',
      caption: '슬라이드2 설명',
      header: '슬라이드2 제목'
    },
    {
      src:'https://i.pinimg.com/originals/3c/7e/41/3c7e4179d11e672f5e09352b3b5b716e.jpg',
      altText: '슬라이드3 이미지 대체 문구',
      caption: '슬라이드3 설명',
      header: '슬라이드3 제목'
    }
  ];


  class R041_ReactstrapCarousel extends Component {
  render() {
    return (
     <UncontrolledCarousel items={items}/>
    )
  }
}
export default R041_ReactstrapCarousel;