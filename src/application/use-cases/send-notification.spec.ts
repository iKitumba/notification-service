import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'Alberto Kitumba aceitou o teu pedido de namoro',
      recipientId: 'exemple-recipient-id',
    });

    console.log(notificationRepository.notifications);

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
