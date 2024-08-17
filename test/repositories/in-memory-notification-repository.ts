import { Notification } from '@application/entities/notification';
import { NotificationRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications = [] as Notification[];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification =
      this.notifications.find(
        (notification) => notification.id === notificationId,
      ) || null;

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notificationFromThisRecipient = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;

    return notificationFromThisRecipient;
  }
}
