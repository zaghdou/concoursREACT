import { Col, Row } from 'antd';
import React from 'react';
import cam from '../images/cam.jpeg';
import ch from '../images/ch.jpeg';
import montre from '../images/montre.jpg';
import parfum from '../images/parf.jpg';
import pc from '../images/pc.jpg';
import './Annances.css'; // Import custom CSS

const products = [
  {
    prodName: "Caméra",
    description: "Caméra de haute qualité pour capturer des moments inoubliables.",
    image: cam,
  },
  {
    prodName: "Chaussures",
    description: "Chaussures élégantes et confortables pour un usage quotidien.",
    image: ch,
  },
  {
    prodName: "Parfum",
    description: "Parfum raffiné avec des notes subtiles pour une touche d'élégance.",
    image:   parfum, 
  },
  {
    prodName: "Montre",
    description: "Montre de luxe avec un design sophistiqué, parfaite pour les occasions spéciales.",
    image: montre,
  },
  {
    prodName: "Ordinateur",
    description: "Ordinateur performant adapté aux professionnels et aux créatifs.",
    image: pc,
  },
  {
    prodName: "Caméra",
    description: "Capturez chaque détail avec cette caméra à haute résolution.",
    image: cam,
  },
  {
    prodName: "Chaussures",
    description: "Chaussures résistantes, idéales pour le sport et les loisirs.",
    image: ch,
  },
  {
    prodName: "Parfum",
    description: "Une fragrance unique qui vous accompagnera toute la journée.",
    image: parfum,
  },
  {
    prodName: "Montre",
    description: "Une montre élégante, alliant design et précision.",
    image: montre,
  },
  {
    prodName: "Ordinateur",
    description: "Un ordinateur rapide et fiable pour toutes vos tâches quotidiennes.",
    image: pc,
  },
];

const Annances = () => {
  return (
    <Row gutter={16} justify="center">
      {products.map((el, index) => {
        return (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index}>
            <div className="card-custom">
              <img src={el.image} alt={el.prodName} className="card-image" />
              <div className="card-content">
                <h3>{el.prodName}</h3>
                <p className="card-description">{el.description}</p>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Annances;
