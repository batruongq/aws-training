/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listOrganizationsByUser = /* GraphQL */ `
  query ListOrganizationsByUser(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationsByUser(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      avatar
      archived
      organizations {
        items {
          id
          name
          description
          userId
          archived
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
