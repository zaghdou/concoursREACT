import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import './Reglement.css'; // For optional custom styles

const { Title, Paragraph } = Typography;

const Reglement = () => {
  return (
    <div className="reglement-page">
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Card className="reglement-card">
            <Title level={2}>Règlement</Title>

            <Paragraph>
              Bienvenue sur notre plateforme. Veuillez lire attentivement les règles suivantes afin d’assurer une expérience
              harmonieuse et sécurisée pour tous les utilisateurs.
            </Paragraph>

            <Title level={4}>1. Utilisation de la plateforme</Title>
            <Paragraph>
              Toute utilisation abusive ou frauduleuse de la plateforme est strictement interdite. Les utilisateurs doivent
              respecter les droits des autres et éviter tout comportement contraire à la législation en vigueur.
            </Paragraph>

            <Title level={4}>2. Confidentialité et Sécurité</Title>
            <Paragraph>
              Nous nous engageons à protéger vos informations personnelles. Vos données ne seront jamais partagées sans votre
              consentement explicite, conformément à notre politique de confidentialité.
            </Paragraph>

            <Title level={4}>3. Conditions d’Utilisation</Title>
            <Paragraph>
              En accédant à notre service, vous acceptez de respecter les conditions d’utilisation décrites ici. Tout manquement
              à ces conditions peut entraîner la suspension de votre compte.
            </Paragraph>

            <Title level={4}>4. Modifications des Règles</Title>
            <Paragraph>
              Nous nous réservons le droit de modifier ces règles à tout moment. Les utilisateurs seront informés de toute
              modification majeure. Il est de la responsabilité de chaque utilisateur de consulter régulièrement cette page.
            </Paragraph>

            <Title level={4}>5. Contact</Title>
            <Paragraph>
              Si vous avez des questions ou des préoccupations concernant ces règles, n'hésitez pas à nous contacter à l’adresse
              suivante : <a href="mailto:support@example.com">support@example.com</a>.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reglement;
