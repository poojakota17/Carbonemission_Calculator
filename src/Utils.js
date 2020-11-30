import { API, Auth } from 'aws-amplify';
import { listIdentityMaps } from './graphql/queries';
import { createIdentityMap } from './graphql/mutations';
import { listBalances,  balanceByPeriod, listSpendingss} from './graphql/queries';
import { createBalance as createBalanceMutation, updateBalance as updateBalanceMutation } from './graphql/mutations';

export async function getIdentity(setData) {
  try {
    const info = await Auth.currentCredentials()
    setData(info.identityId)
  } catch(e) {
    console.log(e);
  }
}

export async function checkIdentityMap(setData) {
  try {
    const {data: {listIdentityMaps: {items}} } = await API.graphql({ query: listIdentityMaps });
    if (items.length > 0)
      setData(true);
  }
  catch(e) {
    console.log(e);
    return null;
  }
}

export async function addIdentityMap(id, setData) {
  try {
    await API.graphql({ query: createIdentityMap, variables: { input: {'pool_id' : id} } })
    setData(true);
  } catch (e) {
    console.log(e);
  }
}

export async function fetchUserInfo(setUser,setUserName) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user);
    if (user.attributes["custom:nickname"])
      setUserName(user.attributes["custom:nickname"])
  } catch(e) {
    console.log(e);
  }
}

export function getToday(setData) {
  const today = new Date();
  setData({year:today.getFullYear(), month: (today.getMonth() + 1)})
}

export  async function fetchBalanceInfo(year, month, setBudget, setSpendings) {
  try {
    const result = await API.graphql({ query: balanceByPeriod, variables: {period: `${year}-${month}-01Z`, limit: 1} });
    const {data: {balanceByPeriod: {items}} } = result;
    if (items.length >= 1) {
      setBudget(items[0].cbudget);
      setSpendings(items[0].cspendings);}
    else {
      setBudget(0);
      setSpendings(0);
    }
  } catch (e) {
    setBudget(0);
    setSpendings(0);
    console.log(e)
  }
}

export async function showAllBalances() {
  try {
    const result = await API.graphql({query: listBalances});
    const {data:{listBalances: {items}}}=result;
    console.log(result)
   console.log("items in balence", items);
  } catch (e) {
    console.log(e)
  }
}

export async function showSpendings(setData) {
  try {
    const result = await API.graphql({query: listSpendingss});
    const {data: {listSpendingss: {items}}} = result;
    console.log(items)
  } catch(e) {
    console.log(e)
  }
}

export async function transformSpendings(setData, transform) {
  try {
    const result = await API.graphql({query: listSpendingss});
    const {data: {listSpendingss: {items}}} = result;
    setData(transform(items));
  } catch(e) {
    console.log(e)
  }
}

export async function updateUserName(user, newName) {
  try {
    await Auth.updateUserAttributes(user, {"custom:nickname": newName})
    console.log("Success");
  }
  catch (e) {
    console.log(e)
  }
}

export async function updateCurrentBalance(period, budget, spendings, setBudget) {
  try {
    const params = {period: `${period.year}-${period.month}-01Z`}
    const {data: {balanceByPeriod: {items}}} = await API.graphql({query: balanceByPeriod, variables: params});
    console.log(items)
    if (items.length >= 1) {
      const newParams = {
        id: items[0].id,
        cbudget: budget
      }
      const updatedBudget = await API.graphql({ query: updateBalanceMutation, variables: {input: newParams}});
      setBudget(budget);
    }
    else
      createNewBalance(budget, spendings, period);
}
    catch(error) { console.log(error);
      console.log("Smth went wrong")
    }
}

async function createNewBalance(budget, spendings, period) {
  const params = {
    'cbudget': budget,
    'cspendings': spendings,
    'period': `${period.year}-${period.month}-01Z`
  }
  try {
    await API.graphql({ query: createBalanceMutation, variables: { input: params } })
    return "New Budget was created"
  } catch (e) {
    console.log(e)
    return "Budget wasn't created"
  }
}

export function splitByItems(records) {
  var temp = {};
  records.forEach((record, i) => {
    if (temp.hasOwnProperty(record.item))
      temp[record.item] += record.emission;
    else {
      temp[record.item] = record.emission;
  }});
  var result = [];
  for (var key in temp){
    result.push({
      name: key,
      value: temp[key]
    })
  }
  return result;
}
