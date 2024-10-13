import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { readAppointmentDetails } from '@/api/appointment/read-appointment-details';
import { IAppointmentDetails } from '@/interfaces/IAppointmentDetails';

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointmentDetails[] | undefined>(undefined);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to submit new appointment
    handleClose(); // Close the modal after submission
  };

  // Fetch appointment details on component mount
  useEffect(() => {
    readAppointmentDetails()
      .then((response) => {
        if (response !== null) {
          setAppointments(response);
        }
      })
      .catch((error: unknown) => {
        console.error('Error fetching appointments: ', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('appointments')}</h1>

      <Button variant="primary" onClick={handleShow}>
        + {t('createAppointment')}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('new_appointment')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pet_id">
              <Form.Label>{t('pet_id')}</Form.Label>
              <Form.Control
                type="text"
                name="pet_id"
                value={newAppointment.pet_id}
                onChange={handleChange}
                placeholder={t('enter_pet_id') || 'Enter Pet ID'}
              />
            </Form.Group>
            <Form.Group controlId="vet_id">
              <Form.Label>{t('vet_id')}</Form.Label>
              <Form.Control
                type="text"
                name="vet_id"
                value={newAppointment.vet_id}
                onChange={handleChange}
                placeholder={t('enter_vet_id') || 'Enter Vet ID'}
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
                placeholder={t('enter_status') || 'Enter Status'}
              />
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>{t('notes')}</Form.Label>
              <Form.Control
                as="textarea"
                name="notes"
                value={newAppointment.notes}
                onChange={handleChange}
                placeholder={t('enter_notes') || 'Enter Notes'}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('save_changes')}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>

      <br />
      {appointments && (
        <div className="appointments-container p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">{t('appointments')}</h1>
          {appointments.length > 0 ? (
            <table className="min-w-full bg-gray-100 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="py-3 px-4">{t('appointment_id')}</th>
                  <th className="py-3 px-4">{t('pet_id')}</th>
                  <th className="py-3 px-4">{t('vet_id')}</th>
                  <th className="py-3 px-4">{t('appointment_date')}</th>
                  <th className="py-3 px-4">{t('status')}</th>
                  <th className="py-3 px-4">{t('clinic_name')}</th>
                  <th className="py-3 px-4">{t('owner_name')}</th>
                  <th className="py-3 px-4">{t('payment_amount')}</th>
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
                    <td className="py-3 px-4">{appointment.clinic_name}</td>
                    <td className="py-3 px-4">{appointment.owner_name}</td>
                    <td className="py-3 px-4">{appointment.payment_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="mt-4 text-gray-600">{t('no_appointments')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Appointments;
