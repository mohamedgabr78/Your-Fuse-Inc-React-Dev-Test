const staticText = {
  title: "Crypto Currencies",
  coinPrice: "Coin Price: ",
  volume: "Volume: ",
  marketRate: "Market Cap: ",
  rank: "Rank: ",
};

export const renderStaticText = (key) => {
  return staticText[key];
};
