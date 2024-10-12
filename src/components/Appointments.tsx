import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useAppointmentData } from '@/api/appointment/read-appointment';
import { useAuthStore } from '@/useAuthStore';

function Appointments() {
  const { user } = useAuthStore();
  const {
    data: appointments,
    isLoading,
    isError,
  } = useAppointmentData({
    //==========BEHAVIOR==========//
    gcTime: 5 * 60000, // 5 minutes cache time
    refetchOnWindowFocus: true,
    refetchInterval: 1 * 1000,
    staleTime: 1 * 1000,
    //==========BEHAVIOR==========//
  });

  const [show, setShowModal] = useState(false);

  const [newAppointment, setNewAppointment] = useState({
    pet_id: '',
    vet_id: '',
    appointment_date: '',
    status: '',
    notes: '',
  });
  const { t } = useTranslation(); // Translation hook

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post('/api/appointments', newAppointment)
      .then((_response) => {
        // setAppointments([...appointments, response.data]); //Add NewAppointments
        handleClose(); //Close Modal
      })
      .catch((error: unknown) => {
        console.error('Error creating appointment: ', error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <h1>{JSON.stringify(user, null, 4)}</h1>
      <h1 className="text-3xl font-bold">{t('appointments')}</h1>
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
      <br />
      {
        <div className="appointments-container p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Appointments</h1>
          {appointments && appointments.length > 0 ? (
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="py-3 px-4">Appointment ID</th>
                  <th className="py-3 px-4">Pet ID</th>
                  <th className="py-3 px-4">Vet ID</th>
                  <th className="py-3 px-4">Appointment Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.appointment_id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{appointment.appointment_id}</td>
                    <td className="py-3 px-4">{appointment.pet_id}</td>
                    <td className="py-3 px-4">{appointment.vet_id}</td>
                    <td className="py-3 px-4">
                      {new Date(appointment.appointment_date).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{appointment.status}</td>
                    <td className="py-3 px-4">{appointment.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="mt-4 text-gray-600">No appointments available.</p>
          )}
        </div>
      }
    </div>
  );
}

export default Appointments;
