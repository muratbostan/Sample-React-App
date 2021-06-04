import { React } from 'react'
import { Col } from 'react-bootstrap'
import { Media } from 'reactstrap';
import { FaCheckCircle } from "react-icons/fa";


const Tests = ({ data = [] }) => {
    return (
        data.map((x) => (
            <Col sm="6" key={x.id}>
                <Medias exp={x} />
            </Col>

        ))
    )
}
 

const Medias = ({ exp }) => {
    return (
        <div className="position-relative">
            <Media>
                <Media left href="#">
                    <Media className="media-img" src={require(`../../assets/img/${exp.img}`).default} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>{exp.name}</Media>
                    {exp.description}</Media>
                    <div>
                    {exp.show === true ? <FaCheckCircle className="icon-locate" size={25} /> : ""}
                    </div>
            </Media>
        </div>
    );
};


export default Tests;