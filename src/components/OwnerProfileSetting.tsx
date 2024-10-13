import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';

const OwnerProfileSetting: React.FC = () => {
    const { t } = useTranslation(); // Translation hook

    return (
        <div>
            <h1 className='text-3xl font-bold'>{t('OwnerProfileSetting')}</h1>
            <br />
            <Form>
                <Form.Group controlId="formFile" as={Row} className="mb-3">
                    <Form.Label column sm="2">{t('Image')}</Form.Label>
                    <Col sm="10">
                        <Form.Control type="file" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                            {t('Default User Name')}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="Your First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        {t('New User Name')}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="UserName" />
                    </Col>
                </Form.Group>
                <Form.Group ontrolId="formFile" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        {t('Living Area')}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="Default select example">
                            <option>Select your Living Area</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group ontrolId="formFile" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Your Age
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="Default select example">
                            <option>Select Your Age</option>
                            <option value="1">~19</option>
                            <option value="2">20~29</option>
                            <option value="3">30~39</option>
                            <option value="4">40~49</option>
                            <option value="5">50~59</option>
                            <option value="6">60~69</option>
                            <option value="7">70~</option>
                            <option value="8">Secret</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default OwnerProfileSetting;