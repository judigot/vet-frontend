import { createFileRoute } from '@tanstack/react-router';
import Appointments from '@/components/Appointments';

export const Route = createFileRoute('/_auth/appointments/')({
  component: Appointments,
});
