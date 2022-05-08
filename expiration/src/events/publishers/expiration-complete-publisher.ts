import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@fcsdev/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}