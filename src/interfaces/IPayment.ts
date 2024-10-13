/* Owner: App Scaffolder */
export interface IPayment {
  appointment_id: number;
  created_at: Date | null;
  payment_date: Date | null;
  payment_id: number;
  payment_method: string | null;
  payment_status: string | null;
  user_id: number;
  amount: number;
}

export function isIPayment(data: unknown): data is IPayment {
  return (
    data !== null &&
    typeof data === 'object' &&
    'appointment_id' in data &&
    'created_at' in data &&
    'payment_date' in data &&
    'payment_id' in data &&
    'payment_method' in data &&
    'payment_status' in data &&
    'user_id' in data &&
    'amount' in data &&
    typeof data.appointment_id === 'number' &&
    typeof data.created_at === 'string' &&
    typeof data.payment_date === 'string' &&
    typeof data.payment_id === 'number' &&
    (data.payment_method === null || typeof data.payment_method === 'string') &&
    (data.payment_status === null || typeof data.payment_status === 'string') &&
    typeof data.user_id === 'number' &&
    typeof data.amount === 'number'
  );
}

export function isIPaymentArray(data: unknown): data is IPayment[] {
  return Array.isArray(data) && data.every(isIPayment);
}
