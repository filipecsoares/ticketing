import { Subjects, Publisher, OrderCancelledEvent } from '@fcsdev/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}