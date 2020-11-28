/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance($owner: String!) {
    onCreateBalance(owner: $owner) {
      id
      period
      cbudget
      cspendings
      user_id
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
      user_id
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
      user_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSpendings = /* GraphQL */ `
  subscription OnCreateSpendings {
    onCreateSpendings {
      id
      title
      quantity
      emission
      period
      user_id
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSpendings = /* GraphQL */ `
  subscription OnUpdateSpendings {
    onUpdateSpendings {
      id
      title
      quantity
      emission
      period
      user_id
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSpendings = /* GraphQL */ `
  subscription OnDeleteSpendings {
    onDeleteSpendings {
      id
      title
      quantity
      emission
      period
      user_id
      category
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
export const onCreateIdentityMap = /* GraphQL */ `
  subscription OnCreateIdentityMap($owner: String!) {
    onCreateIdentityMap(owner: $owner) {
      id
      pool_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateIdentityMap = /* GraphQL */ `
  subscription OnUpdateIdentityMap($owner: String!) {
    onUpdateIdentityMap(owner: $owner) {
      id
      pool_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteIdentityMap = /* GraphQL */ `
  subscription OnDeleteIdentityMap($owner: String!) {
    onDeleteIdentityMap(owner: $owner) {
      id
      pool_id
      createdAt
      updatedAt
      owner
    }
  }
`;
