import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Alberto Kitumba aceitou o teu pedido de namoro'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Alberto Kitumba aceitou o teu pedido de namoro'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Alberto Kitumba aceitou o teu pedido de namoro'),
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
