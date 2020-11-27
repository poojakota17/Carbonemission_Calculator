/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance($owner: String!) {
    onCreateBalance(owner: $owner) {
      id
      period
      cbudget
      cspendings
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance($owner: String!) {
    onUpdateBalance(owner: $owner) {
      id
      period
      cbudget
      cspendings
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance($owner: String!) {
    onDeleteBalance(owner: $owner) {
      id
      period
      cbudget
      cspendings
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSpendings = /* GraphQL */ `
  subscription OnCreateSpendings($owner: String!) {
    onCreateSpendings(owner: $owner) {
      id
      title
      quantity
      emission
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSpendings = /* GraphQL */ `
  subscription OnUpdateSpendings($owner: String!) {
    onUpdateSpendings(owner: $owner) {
      id
      title
      quantity
      emission
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSpendings = /* GraphQL */ `
  subscription OnDeleteSpendings($owner: String!) {
    onDeleteSpendings(owner: $owner) {
      id
      title
      quantity
      emission
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      post
      uname
      like
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      post
      uname
      like
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      post
      uname
      like
      createdAt
      updatedAt
      owner
    }
  }
`;
