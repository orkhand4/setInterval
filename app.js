const demo = () => {
  return new Promise((resolve, reject)=> setTimeout(resolve,5000));
};

const memo = async () => {
  console.log('hakuna');
  await demo();
  console.log('matata');
  console.log('huba muba');
};

memo()

