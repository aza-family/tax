//所得税 - サラリーマンと個人事業主共通

import { getSyakaiHoken } from "./syakaihoken";

//https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm
export const getIncomeTax = (earning: number): number => {
  console.log("getIncomeTax earning:", earning);
  const e = earning * 10000;
  let result;
  if (e > 0 && e <= 1950000) {
    result = e * 0.05 - 0;
  } else if (e > 1950000 && e <= 3300000) {
    result = e * 0.1 - 97500;
  } else if (e > 3300000 && e <= 6900000) {
    result = e * 0.2 - 427500;
  } else if (e > 6950000 && e <= 9000000) {
    result = e * 0.23 - 636000;
  } else if (e > 9000000 && e <= 18000000) {
    result = e * 0.33 - 1536000;
  } else if (e > 18000000 && e < 40000000) {
    result = e * 0.4 - 2796000;
  } else if (e >= 40000000) {
    result = e * 0.45 - 4796000;
  } else {
    return 0;
  }
  return result / 10000;
};

//復興特別所得税
export const getReconstructionSpecialTax = (income: number): number => {
  const tmp = income / 100;
  return tmp * 2.1;
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
  if (y > 0 && y <= 1625000) {
    result = 550000;
  } else if (y >= 1625001 && y <= 1800000) {
    result = y * 0.4 - 100000;
  } else if (y >= 1800001 && y <= 3600000) {
    result = y * 0.3 + 80000;
  } else if (y >= 3600001 && y <= 6600000) {
    result = y * 0.2 + 440000;
  } else if (y >= 6600001 && y <= 8500000) {
    result = y * 0.1 + 1100000;
  } else if (y >= 8500000) {
    result = 1950000;
  } else {
    return 0; //0円・+赤字の場合
  }
  return result / 10000;
};

//住民税
export const getResidenceTax = (earning: number): number => {
  //console.log("getResidenceTax earning:", earning);
  const e = earning * 10000;
  return ((e / 100) * 10) / 10000;
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

//給与所得控除額
//https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm
//https://www.freee.co.jp/kb/kb-payroll/the-deduction-for-employment-income/#content3
//https://www.youtube.com/watch?v=MQHnGApgt_4
export const getSalaryIncomeDeduction = (yearlyIncome: number): number => {
  console.log("@@@@@@!!yearlyIncome", yearlyIncome);
  const y = yearlyIncome * 10000;
  let result;
  if (y <= 550000) {
    result = y;
  } else if (y > 550000 && y <= 1625000) {
    result = 550000;
  } else if (y > 1625000 && y <= 1800000) {
    result = (y / 100) * 40 - 100000;
  } else if (y > 1800000 && y <= 3600000) {
    result = (y / 100) * 30 + 80000;
  } else if (y > 3600000 && y <= 6600000) {
    result = (y / 100) * 20 + 440000;
  } else if (y > 6600000 && y <= 8500000) {
    result = (y / 100) * 10 + 1100000;
  } else {
    //8,500,000超え
    result = 1950000;
  }
  console.log("!!!!!!!!!!!!!!!!!! result:", result);
  return result / 10000;
};

//法人税(800万円まで 15%, 800万円超えたら 23.2%)
//均等割り7万円を追加すべき？ 利益0でも7万円かかる
//法人税額＝課税所得×法人税率－控除額
//赤字の場合の扱い  -> 支払い義務なし
export const getCorporateTax = (earning: number): number => {
  const e = earning * 10000;
  console.log("========= earning:", earning);
  let res;
  if (earning > 0 && earning < 800) {
    res = (e * 0.15) / 10000;
    //return (e * 0.15) / 10000;
  } else if (earning >= 800) {
    const eTmp: number = e - 8000000;

    //return (8000000 * 0.15 + eTmp * 0.23) / 10000;
    res = (8000000 * 0.15 + eTmp * 0.23) / 10000;

    //(e * 0.23) / 10000
  } else {
    res = 7;
  }
  return res;
  //return 0;

  //if (earning > 0 && earning <= 800) {
  //  return (e * 0.15) / 10000;
  //} else if (earning > 800) {
  //  return (e * 0.23) / 10000;
  //} else {
  //  //赤字の場合支払い義務なしに従って
  //  return 0;
  //}
};

//課税所得400万円以下の部分：3.5％
//課税所得400万円超800万円以下の部分：5.3％
//課税所得800万円超の部分：7.0％
//https://www.tax.metro.tokyo.lg.jp/kazei/houjinji.html#ho_02_02
//https://www.smbc-card.com/hojin/magazine/bizi-dora/tax/enterprise-corporate-tax.jsp
//法人事業税(資本金1億以上 or 年金所得 2500万円以上 or 年収入2億円ではない前提)

//年400万円以下の所得 	3.4%
//年400万円超〜年800万円以下の所得 	5.1%
//年800万円超の所得 	6.7%
//ここだと計算違うな
// https://www.saisoncard.co.jp/credictionary/bussinesscard/article222.html
export const getCorporateBusinessTax = (earning: number): number => {
  if (earning > 0 && earning <= 400) {
    return (earning / 100) * 3.5;
  } else if (earning > 400 && earning <= 800) {
    return (earning / 100) * 5.3;
  } else if (earning >= 800) {
    return (earning / 100) * 7.0;
  } else {
    return 0; //赤字の場合支払い義務なしに従って
  }
};

//法人住民税額＝法人税割＋均等割
export const getCorporateResidenceTax = (earning): number => {
  //資本金等の額1,000万円以下 && 従業員数50人以下
  const corporateTax = getCorporateTax(earning);
  const a = getCorporateTaxDiscount(100, corporateTax);
  const b = getPerCapitaRate(100, 1);

  return a + b;
};

//法人税割
//https://www.tax.metro.tokyo.lg.jp/kazei/houjinji.html#ho_02_02
//資本金 or 出資金が1億円 or 法人税額が1000万円以上ではない前提で
export const getCorporateTaxDiscount = (
  capital: number,
  corporateTax: number
): number => {
  //超過税率 10.4%
  //不均一課税適用法人の税率（標準税率） -> 7.0%

  return corporateTax * 0.7;
};

//https://www.saisoncard.co.jp/credictionary/bussinesscard/article222.html
//均等割(従業員数、資本金)
export const getPerCapitaRate = (
  capital: number,
  numberOfEmployees: number
): number => {
  //資本金等の額1,000万円以下 && 従業員数50人以下

  const a = 2; //都道府県税相当
  const b = 5; //市町村税相当

  return a + b;
};

//https://www.kaonavi.jp/dictionary/hyojunhosyugetsugaku/
//会社員用の社会保険料算出(4,5,6給料平均の15% + 会社もこの15%分を負担)
//正確にこっちが正しい
//https://www.kyoukaikenpo.or.jp/~/media/Files/shared/hokenryouritu/r3/ippan/r30213tokyo.pdf

export const getSocialInsurancePremiumForSalaryMan = (
  yearlyIncome: number
): number => {
  //本来は4,5,6月を基準にするが、1年平均としてシンプルな構成にした
  const average = yearlyIncome / 12;
  const tmp = average * 0.15 * 12;
  return Math.round(tmp);
};

export const getHokenForSalaryMan = (yearlyIncome: number): number => {
  //本来は4,5,6月を基準にするが、1年平均としてシンプルな構成にした
  return getSyakaiHoken(yearlyIncome, true);
};

export const getPensionForSalaryMan = (yearlyIncome: number): number => {
  //本来は4,5,6月を基準にするが、1年平均としてシンプルな構成にした
  //const average = yearlyIncome / 12;
  //const tmp = ((average / 100) * 18.3) / 2;
  //return Math.round(tmp);
  return getSyakaiHoken(yearlyIncome, false);
};

//個人事業主用の社会保険料算出(大体課税所得の10%)
//上限額
//「医療分」＝６３万円
//「後期高齢者支援金分」＝１９万円
//「介護分」＝１７万円
//加入者数×38,800円 	加入者全員の年間所得額×7.13% 	63万円
//2.支援金分 （加入者全員） 加入者数×13,200円 	加入者全員の年間所得額×2.41% 	19万円
//3.介護分 （40～64歳の加入者） 40～64歳の加入者数×17,000円 40～64歳の加入者の年間所得額×2.37% 17万円
//https://www.city.koto.lg.jp/250102/fukushi/kokumin/hokenryo/20170201.html
export const getSocialInsurancePremiumForIndividualBusiness = (
  earnings: number
): number => {
  //40歳未満の上限額は63+19=82
  const res = earnings * 0.1;
  return res >= 82 ? 82 : earnings * 0.1;

  //return earnings * 0.1;
};

export const getPension = (): number => {
  return getNationalPension();
};

//16,410 x12 = 196920
export const getNationalPension = (): number => {
  //return 1.6410 * 12;
  return 20;
};

//export const getWelfarePension = () => {};
