import { React, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaCheckCircle } from "react-icons/fa"
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import ContentModal from "./ContentModal"


const Lessons = ({ data = [] }) => {

  const [show, setShow] = useState(false);

  const [content,setTitle] = useState([]);
  const closeModalHandler = () => setShow(false);

  const openModal = (x) => {
    if(x.type==="mp4"){
      setTitle(x);
      setShow(true);
    }

  }
 
  return (
    <Row>
      {data.map((x) => (
        <Col sm="4" key={x.id}>
          <Card onClick={() => openModal(x)}>
            <div> {x.show === true ? <FaCheckCircle className="icon-locate" size={25} /> : ""} </div>
            <CardImg className="card-image" src={require(`../../assets/img/${x.img}`).default} alt="Card image cap" />
            <CardBody className="center" >
              <CardTitle>{x.name}</CardTitle>
              <CardSubtitle>{x.description}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      ))}
      <ContentModal show={show} content={content} data={data} closeModalHandler={closeModalHandler} />
    </Row>

  )
}
 
export default Lessons;