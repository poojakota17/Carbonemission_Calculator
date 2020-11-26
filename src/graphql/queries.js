/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
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
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        period
        cbudget
        cspendings
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSpendings = /* GraphQL */ `
  query GetSpendings($id: ID!) {
    getSpendings(id: $id) {
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
export const listSpendingss = /* GraphQL */ `
  query ListSpendingss(
    $filter: ModelSpendingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpendingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      uname
      post
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uname
        post
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const balanceByMonth = /* GraphQL */ `
  query BalanceByMonth(
    $period: AWSDate
    $sortDirection: ModelSortDirection
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    balanceByMonth(
      period: $period
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        period
        cbudget
        cspendings
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
