import { Publisher, Subjects, TicketUpdatedEvent } from '@fcsdev/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}