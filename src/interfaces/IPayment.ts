/* Owner: App Scaffolder */
export interface IPayment {
  user_id: number;
  payment_status: string | null;
  payment_method: string | null;
  payment_id: number;
  created_at: Date | null;
  appointment_id: number;
  amount: number;
  payment_date: Date | null;
}

export function isIPayment(data: unknown): data is IPayment {
  return (
    data !== null &&
    typeof data === 'object' &&
    'user_id' in data &&
    'payment_status' in data &&
    'payment_method' in data &&
    'payment_id' in data &&
    'created_at' in data &&
    'appointment_id' in data &&
    'amount' in data &&
    'payment_date' in data &&
    typeof data.user_id === 'number' &&
    (data.payment_status === null || typeof data.payment_status === 'string') &&
    (data.payment_method === null || typeof data.payment_method === 'string') &&
    typeof data.payment_id === 'number' &&
    typeof data.created_at === 'string' &&
    typeof data.appointment_id === 'number' &&
    typeof data.amount === 'number' &&
    typeof data.payment_date === 'string'
  );
}

export function isIPaymentArray(data: unknown): data is IPayment[] {
  return Array.isArray(data) && data.every(isIPayment);
}
