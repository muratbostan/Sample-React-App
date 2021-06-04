import { Container, Row, Col } from 'react-bootstrap'
import Tree from '../TreeView/Tree'
import Lessons from '../Contents/Lessons'
import Tests from '../Contents/Tests'

const treeData = [
  {
    key: 1,
    label: "Mateamatik",
    children: [
      {
        key: 11,
        label: "Sayılar",
        children: [
          {
            key: 111,
            label: "Üstlü Sayılar",
            children: [
              {
                key: 1111,
                label: "Üstlü Sayılar Toplama",
              },
              {
                key: 1111,
                label: "Üstlü Sayılar Çıkarma",
              },
            ],
          },
          {
            key: 112,
            label: "Köklü Sayılar",
            children: [
              {
                key: 1121,
                label: "Köklü Sayılar Çıkarma",
              },
            ],
          },
          {
            key: 113,
            label: "Karmaşık Sayılar",
          },
          {
            key: 114,
            label: "Doğal Sayılar",
          },
        ],
      },
    ],
  },
  {
    key: 2,
    label: "Fizik",
    children: [
      {
        key: 20,
        label: "Konu-1",
      },
      {
        key: 21,
        label: "Konu-2",
      },
    ],
  },
  {
    key: 3,
    label: "Kimya",
    children: [],
  },
];
const documents = [
      {
        id: 1,
        name: "İçerik - 1",
        description: "Açıklama",
        type:"mp4",
        url:"video/forest.mp4",
        img:"video-file.png",
        show:true
      },
      {
        id: 2,
        name: "İçerik - 2",
        description: "Açıklama",
        type:"mp4",
        url:"video/rain.mp4",
        img:"video-file.png",
        show:true
      },
      {
        id: 3,
        name: "İçerik - 3",
        description: "Açıklama",
        type:"mp4",
        url:"video/forest.mp4",
        img:"video-file.png",
        show:false
      },
      {
        id: 4,
        name: "İçerik - 4",
        description: "Açıklama",
        type:"jpg",
        url:"",
        img:"jpg.png",
        show:false
      },
      {
        id: 5,
        name: "İçerik - 5",
        description: "Açıklama",
        type:"pdf",
        url:"",
        img:"pdf.png",
        show:false
      },
      {
        id: 6,
        name: "İçerik - 6",
        description: "Açıklama",
        type:"xls",
        url:"",
        img:"xls.png",
        show:false
      },
];
const repetition = [
  {
    id: 1,
    name: "İçerik - 1",
    description: "Açıklama",
    type:"mp4",
    url:"video/forest.mp4 ",
    img:"video-file.png",
    show:true
  },
  {
    id: 2,
    name: "İçerik - 2",
    description: "Açıklama",
    type:"mp4",
    url:"video/rain.mp4",
    img:"video-file.png",
    show:false
  },
  {
    id: 3,
    name: "İçerik - 3",
    description: "Açıklama",
    type:"mp4",
    url:"video/forest.mp4",
    img:"video-file.png",
    show:false
  }
];
const tests = [
  {
    id: 1,
    name: "Konu Testi - 1",
    description: "Açıklama",
    type:"doc",
    url:"",
    img:"doc.png",
    show:true
  },
  {
    id: 2,
    name: "Konu Testi - 2",
    description: "Açıklama",
    type:"doc",
    url:"",
    img:"doc.png",
    show:true
  },
  {
    id: 3,
    name: "Konu Testi - 3",
    description: "Açıklama",
    type:"doc",
    url:"",
    img:"doc.png",
    show:false
  }
];

const Context = () => {

  return (
    <div className="home_content">
      <div className="parent-context">
        <Container>
          <Row>
            <Col sm={4} >
              <div className="bordered class-title">
                10. Sınıf </div>
              <Tree data={treeData} />
            </Col>
            <Col sm={8}>
              <div className="margin-10">
                <div className="div-header">
                  <span>Konu Anlatım</span>
                  <hr />
                </div>
                  <Lessons data={documents} test ="test" />
              </div>
              <div className="margin-10">

                <div className="div-header">
                  <span>Konu Tekrarları</span>
                  <hr />
                </div>
                  <Lessons data={repetition} />
              </div>

              <div className="margin-10">
                <div className="div-header">
                  <span>Konu Testleri</span>
                  <hr />
                </div>
                <Row>
                  <Tests data={tests} />
                </Row>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Context