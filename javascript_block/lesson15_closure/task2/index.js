export const createCalculator = () => {
  let initialNum = 0;
  function add(num) {
    initialNum += num;
    // console.log(initialNum);
    return initialNum;
  }
  function decrease(num) {
    initialNum -= num;
    // console.log(initialNum);
    return initialNum;
  }
  function reset() {
    initialNum = 0;
  }
  function getMemo() {
    // console.log(initialNum);
    return initialNum;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

// test data
const resAdd = createCalculator();
resAdd.add(5);

const resDecrease = createCalculator();
resDecrease.decrease(5);

const resReset = createCalculator();
resReset.reset();

const resGetMemo = createCalculator();
resGetMemo.getMemo();
