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
      metadata {
        category
      }
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
      metadata {
        category
      }
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
      metadata {
        category
      }
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
      uname
      post
      createdAt
      updatedAt
<<<<<<< HEAD
      owner
=======
>>>>>>> 5d62cbacf78d84d1ea21f9cb4632aadbcafa4a01
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      uname
      post
      createdAt
      updatedAt
<<<<<<< HEAD
      owner
=======
>>>>>>> 5d62cbacf78d84d1ea21f9cb4632aadbcafa4a01
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      uname
      post
      createdAt
      updatedAt
<<<<<<< HEAD
      owner
=======
>>>>>>> 5d62cbacf78d84d1ea21f9cb4632aadbcafa4a01
    }
  }
`;
