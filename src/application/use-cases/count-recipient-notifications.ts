import { NotificationRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

type CountRecipientNotificationsResponse = {
  count: number;
};

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;
    const count =
      await this.notificationRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}
