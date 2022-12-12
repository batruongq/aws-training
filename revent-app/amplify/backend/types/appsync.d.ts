export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
};

export type CreateEventInput = {
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['AWSDateTime']>;
  meetingLink?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['ID'];
  start?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateOrganizationInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DeleteEventInput = {
  id: Scalars['ID'];
};

export type DeleteOrganizationInput = {
  id: Scalars['ID'];
};

export type Event = {
  __typename?: 'Event';
  archived?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  meetingLink?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationId: Scalars['ID'];
  start?: Maybe<Scalars['AWSDateTime']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<Event>;
  createOrganization?: Maybe<Organization>;
  deleteEvent?: Maybe<Event>;
  deleteOrganization?: Maybe<Organization>;
  updateEvent?: Maybe<Event>;
  updateOrganization?: Maybe<Organization>;
};


export type MutationCreateEventArgs = {
  input?: InputMaybe<CreateEventInput>;
};


export type MutationCreateOrganizationArgs = {
  input?: InputMaybe<CreateOrganizationInput>;
};


export type MutationDeleteEventArgs = {
  input?: InputMaybe<DeleteEventInput>;
};


export type MutationDeleteOrganizationArgs = {
  input?: InputMaybe<DeleteOrganizationInput>;
};


export type MutationUpdateEventArgs = {
  input?: InputMaybe<UpdateEventInput>;
};


export type MutationUpdateOrganizationArgs = {
  input?: InputMaybe<UpdateOrganizationInput>;
};

export type Organization = {
  __typename?: 'Organization';
  archived?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Event>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['AWSDateTime']>;
  user: User;
  userId: Scalars['ID'];
};

export type OrganizationValidation = {
  __typename?: 'OrganizationValidation';
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type UpdateEventInput = {
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  meetingLink?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  start?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateOrganizationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  archived?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  organizations?: Maybe<Array<Maybe<Organization>>>;
};
