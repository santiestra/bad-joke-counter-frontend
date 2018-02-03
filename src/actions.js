import store from "./store";

export const increment = (user) => {
  const { countByUser: oldCountByUser } = store.getState();
  const previousUserCount = oldCountByUser[user] || 0;
  const countByUser = { ...oldCountByUser, [user]: previousUserCount + 1};
  console.log(countByUser);
  store.setState({
    count: store.getState().count + 1,
    countByUser,
  })
}

