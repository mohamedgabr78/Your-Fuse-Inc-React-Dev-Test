const staticText = {
  title: "Crypto Currencies",
  coinPrice: "Coin Price",
  volume: "Volume",
  marketRate: "Market Cap",
  rank: "Rank",
  coinTitle: "Coin Name",
};

export const renderStaticText = (key) => {
  return staticText[key];
};
