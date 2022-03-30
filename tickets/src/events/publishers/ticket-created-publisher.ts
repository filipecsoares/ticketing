import { Publisher, Subjects, TicketCreatedEvent } from '@fcsdev/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}