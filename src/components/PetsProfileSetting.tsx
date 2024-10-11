import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PetsProfileSetting: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { t } = useTranslation(); // Translation hook

    return (
        <div>
            <h1 className='text-3xl font-bold'>{t('Pets Profile')}</h1>
            
            <br />
            <Button variant="primary" onClick={handleShow}>+</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Pets Profile Setting')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" as={Row} className="mb-3">
                            <Form.Label column sm="2">{t('Image')}</Form.Label>
                            <Col sm="10">
                                <Form.Control type="file" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                {t('Name')}
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="PetsName" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                {t('Birthday')}
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Birthday" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label column sm="2">Note</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} placeholder="Note" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PetsProfileSetting;