const func1 = () => console.log(arguments.length);

const func2 = function () {
  console.log(arguments.length);
};

func1([1, 2, 3]); // error

func2([1, 2, 3]); // 1
