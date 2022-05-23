import React from 'react';
import { Link, useParams, useHistory, Redirect } from 'react-router-dom';
import { Layout, Row, Col, Card, Button } from 'antd';
import PropTypes from 'prop-types';

export const GroomerServicesPage = props => {
  console.log('');
  console.log('services page props', props);
  const { id } = useParams();
  const groomer_services = [
    {
      service_image:
        'https://media2.s-nbcnews.com/j/newscms/2020_16/1558196/dog-groomer-today-main1-200413_4df21d7bd66fc069fcd5e48f4b2219e7.fit-760w.jpg',
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
        'https://www.thebalancecareers.com/thmb/aIbeKomKS-pSuGaVJzoKG1rirkE=/3763x3763/smart/filters:no_upscale()/female-groomer-trimming-cocker-spaniel-at-dog-grooming-salon-740521837-5a9c26618e1b6e00364237aa.jpg',
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
  ];

  const pushToScheduled = () => {
    props.history.push(`/scheduled`);
  };

  return (
    <div className="container-fluid">
      <div style={{ padding: '25px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>PROFESSIONAL PET CARE SERVICES</h2>
        <p className="groomer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      {groomer_services.map(service => {
        return (
          <div className="services-card">
            <div className="services-container">
              <div className="services-image">
                <img className="services-image" src={service.service_image} />
              </div>
            </div>
            <div className="services-title">
              <div style={{ marginLeft: '-0.5%', width: '100%' }}>
                <h1 className="services-heading">{service.service_name}</h1>
                <h2 className="services-price">
                  Starting at ${service.serviceCost}
                </h2>
                <p>{service.service_description}</p>
              </div>
              <div className="services-features">
                <ul>
                  {service.serviceFeatures.map(feature => {
                    return <li>{feature}</li>;
                  })}
                </ul>
              </div>
              <div className="services-button-container">
                <Link to={`/groomer/${id}/schedule`}>
                  <Button
                    className="services-button"
                    style={{ backgroundColor: '#2c89d9', color: 'white' }}
                    // onClick={() => pushToScheduled()}
                  >
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

GroomerServicesPage.propTypes = {};
