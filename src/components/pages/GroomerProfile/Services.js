import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
export const Services = () => {
  const groomer_services = [
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Breed-specific Haircuts',
      service_description:
        "Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.",
      serviceFeatures: [
        'Cut and style',
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
    {
      service_image:
        'https://pawt4paws.com/wp-content/uploads/2020/01/Pet-CDB-drops-for-grooming.jpg',
      service_name: 'Baths for Every Breed',
      service_description:
        'We’ll suds away dirt, oil and debris to help skin & coats of all types look and feel great.',
      serviceFeatures: [
        'Deep-cleaning shampoo',
        'Blow-dry',
        '15-min brushout',
        'Scented spritz',
        'Gland expression',
        'Nail trim',
      ],
      serviceCost: 100,
    },
  ];

  const { Meta } = Card;

  return (
    <div>
      <Row style={{ marginTop: '1em' }} gutter={[16, 16]}>
        <Col
          style={{ textAlign: 'center' }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
        >
          <div className="main-services-top">
            <h2>WELCOME TO THE @GROOMER_NAME</h2>
            <p></p>
          </div>
          <div className="main-services-top">
            <h3>CANINE CONCIERGE SERVICES BASED IN @GROOMER_LOCATION</h3>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
          <div className="main-services-middle text">
            <p>Our Services</p>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}></Col>
      </Row>
      <Row style={{ justifyContent: 'center' }} gutter={[16, 16]}>
        {groomer_services.map(service => {
          return (
            <div style={{ margin: '15px' }}>
              <Card
                style={{ width: '240px' }}
                cover={<img className="card" src={service.service_image} />}
                hoverable
                bordered={true}
                style={{ width: 240 }}
              >
                <div className="image">{service.service_name}</div>
                <div style={{ paddingTop: '10px' }}>
                  <Button
                    style={{ backgroundColor: '#2c89d9', color: 'white' }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </Row>
    </div>
  );
};
