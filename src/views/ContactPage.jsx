import React from 'react';
import { Form, Input, Button, Layout, Typography, Space } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';



const { Header, Content } = Layout;
const { Title } = Typography;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Form Data:', values);
  };

  return (
    <Layout>
      <Header style={{ textAlign: 'center', padding: '16px' }}>
        <Title level={2} style={{ color: 'white' }}>Contact</Title>
      </Header>

      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item name="nom" label="Nom" rules={[{ required: true, message: 'Veuillez entrer votre nom.' }]}>
                <Input prefix={<UserOutlined />} placeholder="Nom" />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide.' }]}>
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item name="phone" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone.' }]}>
                <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone" />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Veuillez entrer votre message.' }]}>
                <Input.TextArea placeholder="Votre message" rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Envoyer
                </Button>
                <Button htmlType="button" block style={{ marginTop: '10px' }}>
                  Annuler
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default ContactPage;
