import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
// import { response } from 'express';

interface Appointment {
  appointment_id: number;
  pet_id: number;
  vet_id: number;
  appointment_date: string;
  status: string;
  notes: string;
}



const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [show, setShowModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    pet_id: '',
    vet_id: '',
    appointment_date: '',
    status: '',
    notes: '',
  })
  const { t } = useTranslation(); // Translation hook

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/api/appointments', newAppointment)
      .then(response => {
        setAppointments([...appointments, response.data]); //Add NewAppointments
        handleClose(); //Close Modal
      })
      .catch(error => console.error("Error creating appointment: ", error));
      
  };


  useEffect(() => {
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error("Error fetching appointments: ", error));

  }, []);

  return(
    <div>
      <h1 className='text-3xl font-bold'>{t('appointments')}</h1>
      {/* <ul>
        {appointments.map(appointment => (
          <li key={appointment.appointment_id}>
            Pet ID: {appointment.pet_id}, Vet_id: {appointment.vet_id}, Date: {appointment.appointment_date}, Status: {appointment.status}
          <br /> Notes: {appointment.notes}
          </li>
        ))}
      </ul> */}
      <Button variant="primary" onClick={handleShow}>
        + {t('createAppointment')}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('new_appointment')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="pet_id">
              <Form.Label>{t('pet_id')}</Form.Label>
              <Form.Control
                type="text"
                name="pet_id"
                value={newAppointment.pet_id}
                onChange={handleChange}
                placeholder="Enter Pet ID"
              />
            </Form.Group>
            <Form.Group controlId="vet_id">
              <Form.Label>{t('vet_id')}</Form.Label>
              <Form.Control
                type="text"
                name="vet_id"
                value={newAppointment.vet_id}
                onChange={handleChange}
                placeholder="Enter Vet ID"
              />
            </Form.Group>
            <Form.Group controlId="appointment_date">
              <Form.Label>{t('appointment_date')}</Form.Label>
              <Form.Control
                type="date"
                name="appointment_date"
                value={newAppointment.appointment_date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>{t('status')}</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={newAppointment.status}
                onChange={handleChange}
                placeholder="Enter Status"
              />
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>{t('notes')}</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                value={newAppointment.notes}
                onChange={handleChange}
                placeholder="Enter Notes"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('close')}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t('save_changes')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default Appointments;