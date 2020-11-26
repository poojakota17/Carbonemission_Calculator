/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBalance = /* GraphQL */ `
  mutation CreateBalance(
    $input: CreateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    createBalance(input: $input, condition: $condition) {
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
export const updateBalance = /* GraphQL */ `
  mutation UpdateBalance(
    $input: UpdateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    updateBalance(input: $input, condition: $condition) {
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
export const deleteBalance = /* GraphQL */ `
  mutation DeleteBalance(
    $input: DeleteBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    deleteBalance(input: $input, condition: $condition) {
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
export const createSpendings = /* GraphQL */ `
  mutation CreateSpendings(
    $input: CreateSpendingsInput!
    $condition: ModelSpendingsConditionInput
  ) {
    createSpendings(input: $input, condition: $condition) {
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
export const updateSpendings = /* GraphQL */ `
  mutation UpdateSpendings(
    $input: UpdateSpendingsInput!
    $condition: ModelSpendingsConditionInput
  ) {
    updateSpendings(input: $input, condition: $condition) {
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
export const deleteSpendings = /* GraphQL */ `
  mutation DeleteSpendings(
    $input: DeleteSpendingsInput!
    $condition: ModelSpendingsConditionInput
  ) {
    deleteSpendings(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      uname
      post
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      uname
      post
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      uname
      post
      createdAt
      updatedAt
      owner
    }
  }
`;
