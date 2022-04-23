import { Publisher, OrderCreatedEvent, Subjects } from '@fcsdev/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}