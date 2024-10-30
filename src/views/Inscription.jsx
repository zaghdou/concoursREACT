import React, { useState } from 'react';
import { Form, Input, Button, Select, Layout, Typography, Space } from 'antd';
import { PhoneOutlined, LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Option } = Select;
const { Header, Content } = Layout;
const { Title } = Typography;

const Inscription = () => {
  const [formType, setFormType] = useState('inscription');

  const handleFormTypeChange = (value) => {
    setFormType(value);
  };

  const onFinish = (values) => {
    console.log('Form Data:', values);
  };

  return (
    <Layout>
      <Header style={{ textAlign: 'center', padding: '16px' }}>
        <Title level={2} style={{ color: 'white' }}>Inscription</Title>
      </Header>

      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Select
              defaultValue="inscription"
              onChange={handleFormTypeChange}
              style={{ width: '100%' }}
            >
              <Option value="inscription">Inscription</Option>
              <Option value="code">Code</Option>
            </Select>


            {formType === 'inscription' && (
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="nom" label="Nom" rules={[{ required: true, message: 'Veuillez entrer votre nom.' }]}>
                  <Input prefix={<UserOutlined />} placeholder="Nom" />
                </Form.Item>
                <Form.Item name="prenom" label="Prénom" rules={[{ required: true, message: 'Veuillez entrer votre prénom.' }]}>
                  <Input prefix={<UserOutlined />} placeholder="Prénom" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide.' }]}>
                  <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item name="phone" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone.' }]}>
                  <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone" />
                </Form.Item>
                <Form.Item name="password" label="Mot de passe" rules={[{ required: true, message: 'Veuillez entrer votre mot de passe.' }]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Mot de passe" />
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
            )}


            {formType === 'code' && (
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="phone" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone.' }]}>
                  <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone" />
                </Form.Item>
                <Form.Item name="code" label="Code" rules={[{ required: true, message: 'Veuillez entrer le code.' }]}>
                  <Input prefix={<LockOutlined />} placeholder="Code" />
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
            )}
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default Inscription;
