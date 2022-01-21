export const getSyakaiHoken = (
  yearlyIncome: number,
  isHoken: boolean
): number => {
  //本来は4,5,6月を基準にするが、1年平均としてシンプルな構成にした
  const salary = yearlyIncome / 12;
  const s = salary * 10000;
  const hokenPer = 0.0984;
  const pensionPer = 0.183;
  const per = isHoken ? hokenPer : pensionPer;
  let result;
  if (s > 0 && s <= 63000) {
    result = 58000 * per;
  } else if (s > 63000 && s <= 73000) {
    result = 68000 * per;
  } else if (s > 73000 && s <= 83000) {
    result = 78000 * per;
  } else if (s > 83000 && s <= 93000) {
    result = 88000 * per;
  } else if (s > 93000 && s <= 101000) {
    result = 98000 * per;
  } else if (s > 101000 && s <= 107000) {
    result = 104000 * per;
  } else if (s > 107000 && s <= 114000) {
    result = 110000 * per;
  } else if (s > 114000 && s <= 122000) {
    result = 118000 * per;
  } else if (s > 122000 && s <= 130000) {
    result = 126000 * per;
  } else if (s > 130000 && s <= 138000) {
    result = 134000 * per;
  } else if (s > 138000 && s <= 146000) {
    result = 142000 * per;
  } else if (s > 146000 && s <= 155000) {
    result = 150000 * per;
  } else if (s > 155000 && s <= 165000) {
    result = 160000 * per;
  } else if (s > 165000 && s <= 175000) {
    result = 170000 * per;
  } else if (s > 175000 && s <= 185000) {
    result = 180000 * per;
  } else if (s > 185000 && s <= 195000) {
    result = 190000 * per;
  } else if (s > 195000 && s <= 210000) {
    result = 200000 * per;
  } else if (s > 210000 && s <= 230000) {
    result = 220000 * per;
  } else if (s > 230000 && s <= 250000) {
    result = 240000 * per;
  } else if (s > 250000 && s <= 270000) {
    result = 260000 * per;
  } else if (s > 270000 && s <= 290000) {
    result = 280000 * per;
  } else if (s > 290000 && s <= 310000) {
    result = 300000 * per;
  } else if (s > 310000 && s <= 330000) {
    result = 320000 * per;
  } else if (s > 330000 && s <= 350000) {
    result = 340000 * per;
  } else if (s > 350000 && s <= 370000) {
    result = 360000 * per;
  } else if (s > 370000 && s <= 395000) {
    result = 380000 * per;
  } else if (s > 395000 && s <= 425000) {
    result = 410000 * per;
  } else if (s > 425000 && s <= 455000) {
    result = 440000 * per;
  } else if (s > 455000 && s <= 485000) {
    result = 470000 * per;
  } else if (s > 485000 && s <= 515000) {
    result = 500000 * per;
  } else if (s > 515000 && s <= 545000) {
    result = 530000 * per;
  } else if (s > 545000 && s <= 575000) {
    result = 560000 * per;
  } else if (s > 575000 && s <= 605000) {
    result = 590000 * per;
  } else if (s > 605000 && s <= 635000) {
    result = 620000 * per;
  } else if (s > 635000 && s <= 665000) {
    result = 650000 * per;
  } else if (s > 665000 && s <= 695000) {
    result = isHoken ? 680000 * per : 650000 * per;
  } else if (s > 695000 && s <= 730000) {
    result = isHoken ? 710000 * per : 650000 * per;
  } else if (s > 730000 && s <= 770000) {
    result = isHoken ? 750000 * per : 650000 * per;
  } else if (s > 770000 && s <= 810000) {
    result = isHoken ? 790000 * per : 650000 * per;
  } else if (s > 810000 && s <= 855000) {
    result = isHoken ? 830000 * per : 650000 * per;
  } else if (s > 855000 && s <= 905000) {
    result = isHoken ? 880000 * per : 650000 * per;
  } else if (s > 905000 && s <= 955000) {
    result = isHoken ? 930000 * per : 650000 * per;
  } else if (s > 955000 && s <= 1005000) {
    result = isHoken ? 980000 * per : 650000 * per;
  } else if (s > 1005000 && s <= 1055000) {
    result = isHoken ? 1030000 * per : 650000 * per;
  } else if (s > 1055000 && s <= 1115000) {
    result = isHoken ? 1090000 * per : 650000 * per;
  } else if (s > 1115000 && s <= 1175000) {
    result = isHoken ? 1150000 * per : 650000 * per;
  } else if (s > 1175000 && s <= 1235000) {
    result = isHoken ? 1210000 * per : 650000 * per;
  } else if (s > 1235000 && s <= 1295000) {
    result = isHoken ? 1270000 * per : 650000 * per;
  } else if (s > 1295000 && s <= 1355000) {
    result = isHoken ? 1330000 * per : 650000 * per;
  } else if (s > 1355000) {
    result = isHoken ? 1390000 * per : 650000 * per;
  } else {
    return 0; //赤字の場合支払い義務なしに従って
  }
  return (result / 10000 / 2) * 12;
  //const tmp = (average * 0.984) / 2;
  //return Math.round(tmp);
};
