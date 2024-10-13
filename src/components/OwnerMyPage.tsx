import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';


const OwnerMyPage: React.FC = () => {
    const { t } = useTranslation(); // Translation hook
  return (
    <div>
      <h1 className='text-3xl font-bold'>{t('MyPage')}</h1>
      <Dropdown>
        <Dropdown.Toggle variant="light" size="lg" id="dropdown-basic">
          User Name
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Pets</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    
      <br />

      <CardGroup>
        <Card bg='Light' style={{ width: '18rem' }}>
          <Card.Header></Card.Header>
          <Card.Body >
            <Card.Text>
              {t('Lost Animals')}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg='Light' style={{ width: '18rem' }}>
          <Card.Header></Card.Header>
          <Card.Body >
            <Card.Text>
              {t('Looking for Foster')}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br />
      
      <Card bg='Light' style={{ width: '40rem' }}>
        <Card.Header>{t('Pets Record Table')}</Card.Header>
        <Card.Body >
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OwnerMyPage;