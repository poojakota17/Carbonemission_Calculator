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
      score
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
      score
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
      score
      metadata {
        category
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
