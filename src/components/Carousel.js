import React from "react";
import Card from './Card';
import pun from '../imgs/pun.jpg';
import smile from '../imgs/smile.png';
import food from '../imgs/food.png';
import firewall from '../imgs/firewall.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Carousel extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          items: [
              {
                  id: 0,
                  title: 'Food Decider Bot',
                  subTitle: 'Chat bot which helps you decide what you want to eat!',
                  imgSrc: food,
                  link: 'https://assistant.google.com/services/a/uid/000000c8c9ab6f9a?hl=en',
                  selected: false
              },
              {
                  id: 1,
                  title: 'Fun Pun Game',
                  subTitle: 'Fun Game for Google Assistant',
                  imgSrc: pun,
                  link: 'https://assistant.google.com/services/a/uid/000000e08f3d71df?hl=en-US&source=web',
                  selected: false
              },
              {
                  id: 2,
                  title: 'Colorful Smile',
                  subTitle: 'ML model built using python that detects your smile in real time and displays your name',
                  imgSrc: smile,
                  link: 'https://github.com/IshitaKhetarpal/smiledetector',
                  selected: false
              },
              {
                    id: 3,
                    title: 'Network Firewall Simulation',
                    subTitle: 'Visualization project',
                    imgSrc: firewall,
                    link: 'https://github.com/IshitaKhetarpal/ComputerGraphicsProject',
                    selected: false
              },     
          ]
      }
  }


  handleCardClick = (id, card) => {

      let items = [...this.state.items];

      items[id].selected = items[id].selected ? false : true;

      items.forEach(item => {
          if(item.id !== id) {
              item.selected = false;
          }
      });

      this.setState({
          items
      });
  }


  makeItems = (items) => {
      return items.map(item => {
          return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
      })
  }


  render() {
      return(
      <div className='Projects' id='Projects'>
        <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container gradient mt-5' id='firstImgContainer'>
          <h4 class='mt-3  font-weight-bold'>Projects</h4>
          
        </div>
        <div class='container imgContainer gradient'>
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
          </div>
          </ScrollAnimation>
        </div>
      );
  }

}

export default Carousel;