import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;




const CardCST = ({ prName, description, image }) => {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={ image } />}
  >
    <Meta title={prName} description={description} />
  </Card>
  )
}

export default CardCST
