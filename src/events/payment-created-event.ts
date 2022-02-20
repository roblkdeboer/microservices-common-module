import { OrderStatus } from './types/order-status';
import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
