const getRandomInt = (min, max) => {
  const roundedMax = Math.floor(max);
  const roundedMin = Math.ceil(min);

  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin;
};

export default getRandomInt;
