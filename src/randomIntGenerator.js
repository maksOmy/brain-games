const getRandomInt = (min, max) => {
  const roundedMax = Math.floor(max);
  const roundedMin = Math.ceil(min);

  return Math.round(Math.random() * (roundedMax - roundedMin)) + roundedMin;
};

export default getRandomInt;
