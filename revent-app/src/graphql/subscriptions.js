/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userId: String
  ) {
    onCreateEvent(filter: $filter, userId: $userId) {
      id
      name
      description
      start
      end
      meetingLink
      createdAt
      updatedAt
      userId
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userId: String
  ) {
    onUpdateEvent(filter: $filter, userId: $userId) {
      id
      name
      description
      start
      end
      meetingLink
      createdAt
      updatedAt
      userId
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userId: String
  ) {
    onDeleteEvent(filter: $filter, userId: $userId) {
      id
      name
      description
      start
      end
      meetingLink
      createdAt
      updatedAt
      userId
    }
  }
`;
