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
      item
      quantity
      emission
      period
      category
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
        item
        quantity
        emission
        period
        category
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        post
        uname
        like
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getIdentityMap = /* GraphQL */ `
  query GetIdentityMap($id: ID!) {
    getIdentityMap(id: $id) {
      id
      pool_id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listIdentityMaps = /* GraphQL */ `
  query ListIdentityMaps(
    $filter: ModelIdentityMapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdentityMaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pool_id
        createdAt
        updatedAt
        owner
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
export const balanceByPeriod = /* GraphQL */ `
  query BalanceByPeriod(
    $period: AWSDate
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    balanceByPeriod(
      period: $period
      id: $id
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
export const spendingsByPeriod = /* GraphQL */ `
  query SpendingsByPeriod(
    $period: AWSDate
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSpendingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spendingsByPeriod(
      period: $period
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        item
        quantity
        emission
        period
        category
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const spendingsByCategory = /* GraphQL */ `
  query SpendingsByCategory(
    $category: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSpendingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spendingsByCategory(
      category: $category
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        item
        quantity
        emission
        period
        category
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
