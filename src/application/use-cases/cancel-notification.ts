import { NotificationRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }
  }
}
