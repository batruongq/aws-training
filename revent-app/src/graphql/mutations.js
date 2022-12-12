/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization($input: CreateOrganizationInput) {
    createOrganization(input: $input) {
      id
      name
      description
      userId
      user {
        id
        email
        name
        avatar
        archived
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      events {
        items {
          id
          name
          description
          start
          end
          meetingLink
          organizationId
          userId
          archived
          createdAt
          updatedAt
          organizationEventsId
        }
        nextToken
      }
      archived
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization($input: UpdateOrganizationInput) {
    updateOrganization(input: $input) {
      id
      name
      description
      userId
      user {
        id
        email
        name
        avatar
        archived
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      events {
        items {
          id
          name
          description
          start
          end
          meetingLink
          organizationId
          userId
          archived
          createdAt
          updatedAt
          organizationEventsId
        }
        nextToken
      }
      archived
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization($input: DeleteOrganizationInput) {
    deleteOrganization(input: $input) {
      id
      name
      description
      userId
      user {
        id
        email
        name
        avatar
        archived
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      events {
        items {
          id
          name
          description
          start
          end
          meetingLink
          organizationId
          userId
          archived
          createdAt
          updatedAt
          organizationEventsId
        }
        nextToken
      }
      archived
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent($input: CreateEventInput) {
    createEvent(input: $input) {
      id
      name
      description
      start
      end
      meetingLink
      organizationId
      organization {
        id
        name
        description
        userId
        user {
          id
          email
          name
          avatar
          archived
          createdAt
          updatedAt
        }
        events {
          nextToken
        }
        archived
        createdAt
        updatedAt
      }
      userId
      archived
      createdAt
      updatedAt
      organizationEventsId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent($input: UpdateEventInput) {
    updateEvent(input: $input) {
      id
      name
      description
      start
      end
      meetingLink
      organizationId
      organization {
        id
        name
        description
        userId
        user {
          id
          email
          name
          avatar
          archived
          createdAt
          updatedAt
        }
        events {
          nextToken
        }
        archived
        createdAt
        updatedAt
      }
      userId
      archived
      createdAt
      updatedAt
      organizationEventsId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($input: DeleteEventInput) {
    deleteEvent(input: $input) {
      id
      name
      description
      start
      end
      meetingLink
      organizationId
      organization {
        id
        name
        description
        userId
        user {
          id
          email
          name
          avatar
          archived
          createdAt
          updatedAt
        }
        events {
          nextToken
        }
        archived
        createdAt
        updatedAt
      }
      userId
      archived
      createdAt
      updatedAt
      organizationEventsId
    }
  }
`;
