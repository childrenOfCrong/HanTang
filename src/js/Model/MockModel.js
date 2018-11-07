import { shuffle } from "../helper";

const makeMockUserList = () => {
  const mockUserList = [];
  const mockCardSet = shuffle([...new Array(20).keys()]);
  for (let i = 0; i < 3; i++) {
    mockUserList.push({
      ID: i,
      profile: `user-${i}`,
      cardSet: [mockCardSet.pop(), mockCardSet.pop()],
      money: 10,
      status: "call",
      gameResult: null,
      score: null
    });
  }
  return mockUserList;
};

export default makeMockUserList;
