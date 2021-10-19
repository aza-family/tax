//所得税 - サラリーマンと個人事業主共通
//https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
export const getIncomeTax = (earning: number): number => {
  const e = earning * 10000;
  if (e <= 1950000) {
    return e * 0.05 - 0;
  } else if (e > 1950000 && e <= 3300000) {
    return e * 0.1 - 97500;
  } else if (e > 3300000 && e <= 6900000) {
    return e * 0.2 - 427500;
  } else if (e > 6950000 && e <= 9000000) {
    return e * 0.23 - 636000;
  } else if (e > 9000000 && e <= 18000000) {
    return e * 0.33 - 1536000;
  } else if (e > 18000000 && e < 40000000) {
    return e * 0.4 - 2796000;
  } else {
    return e * 45 - 4796000;
  }
};

//給与所得控除(会社員)
//https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm
//1,625,000円まで 	550,000円
//1,625,001円から 	1,800,000円まで 	収入金額×40％-100,000円
//1,800,001円から 	3,600,000円まで 	収入金額×30％+80,000円
//3,600,001円から 	6,600,000円まで 	収入金額×20％+440,000円
//6,600,001円から 	8,500,000円まで 	収入金額×10％+1,100,000円
//,8,500001円以上 	1,950,000円（上限）
//Earned Income Tax Credit (EITC) |
export const getEarnedIncomeTaxCredit = (yearlyIncome: number): number => {
  const y = yearlyIncome * 10000;
  let result;
  if (y <= 1625000) {
    result = 550000;
  } else if (y >= 1625001 && y <= 1800000) {
    result = y * 0.4 - 100000;
  } else if (y >= 1800001 && y <= 3600000) {
    result = y * 0.3 + 80000;
  } else if (y >= 3600001 && y <= 6600000) {
    result = y * 0.2 + 440000;
  } else if (y >= 6600001 && y <= 8500000) {
    result = y * 0.1 + 1100000;
  } else {
    result = 1950000;
  }
  return result / 10000;
};

//住民税
export const getResidenceTax = (earning: number): number => {
  //console.log("getResidenceTax earning:", earning);
  const e = earning * 10000;
  return ((e / 100) * 10) / 10000;
};

//法人税(800万円まで 15%, 800万円超えたら 23.2%)
//均等割り7万円を追加すべき？ 利益0でも7万円かかる
export const getCorporateTax = (earning: number): number => {
  const e = earning * 10000;
  if (earning <= 800) {
    return e * 0.15;
  } else {
    return e * 0.23;
  }
};

//https://advisors-freee.jp/article/category/cat-big-05/cat-small-13/5629/
//基礎控除(정확히 어느 부분에서 제외되는지 이해못한상태)
//2,400万円以下 	48万円
//2,400万円超2,450万円以下 	32万円
//2,450万円超2,500万円以下 	16万円
//2,500万円超 	0円

export const getBasicDeduction = (earning: number): number => {
  //const e = earning;
  if (earning <= 2400) {
    return 48;
  } else if (earning > 2400 && earning <= 2450) {
    return 32;
  } else if (earning > 2450 && earning <= 2500) {
    return 16;
  } else {
    return 0;
  }
};

//https://www.saisoncard.co.jp/credictionary/bussinesscard/article222.html
//均等割(従業員数、資本金)
export const getPerCapitaRate = (
  numberOfEmployees: number,
  capital: number
): number => {
  //資本金等の額1,000万円以下 && 従業員数50人以下

  const a = 2; //都道府県税相当
  const b = 5; //市町村税相当

  return a + b;
};
