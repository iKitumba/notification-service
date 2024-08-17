import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Alberto Kitumba aceitou o teu pedido de namoro'),
    recipientId: 'recipient-1',
    ...override,
  });
}
