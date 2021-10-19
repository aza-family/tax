//経営者の給料も同様
export interface SalarymanState {
  flag: boolean;
  yearlyIncome: number; //年収
  deduction: number; //控除
  earnedIncome: number; //給与の所得
  //雇用保険料（もあるが、金額が小さいらしい)
  socialInsurancePremium: number; //社会保険料 -> 医療保険 -> 健康保険 -> 10%(会社が半分負担)
  //社会保険料 -> 年金保険 -> 国民年金(固定),厚生年金（給料によって変動) <<会社員の場合両方入る  -> 合わせてだいたい18%(会社が半分負担)
  //4,5,6月の給料で決まる金額(健康保険,厚生年金)
  //労働保険 ->雇用保険 - 실업급여 의무인가? -> 1%(会社が半分負担)
  //労働保険 -> 労災保険  - 다쳤을때 의무인가? -> 0.4%(会社が全額負担)
  //全部合わせると30%ぐらい社会保険料になる -> 会社が負担するので15%程度？
  incomeTax: number; //所得税
  residenceTax: number; //住民税
}

export interface IndividualBusinessState {
  flag: boolean;
  revenue: number; //売上
  expense: number; //経費
  deduction: number; //控除
  profit: number; //課税所得
  socialInsurancePremium: number; //社会保険料 -> 医療保険 -> 国民健康保険料(事業主) -> 大体5~77万円
  //社会保険料 -> 医療保険 -> 国民年金(事業主) <<固定額 月16400円 令和3年から月16610円
  incomeTax: number; //所得税
  residenceTax: number; //個人住民税
  enterpriseTax: number; //個人事業税-290万円超の所得を得た個人
  consumptionTax: number; //消費税
  //国民年金保険料
  //印紙税
  //復興特別所得税(2.1%)
}

/*SESのシステムエンジニア
290万円超の所得を得た個人
フリーランスに多い準委任契約によるシステムエンジニアやプログラマー、ライターなどは、法定業種に当てはまらないため非課税となる可能性があります。

実際の業務内容によっては請負業などと判断され、課税対象になることも。自身の業種や仕事の内容を整理した上で、管轄の都税事務所や県税事務所に相談すれば納税対象に当てはまるのかどうかを確認することができます。

https://sato-sogou.com/news/accounting/freelance_kojinjigyouzei/
原則として業務委託契約や準委任契約のシステムエンジニアは、通常労働時間の対価として報酬を受け取りますので法定業種に該当なく、個人事業税の対象になりません。

一方で実体として具体的な成果物まで求められる内容の場合には、契約書が業務委託や準委任であったとしても、請負業や製造業・コンサルタント業として見做され、個人事業税の対象となる場合があります。
Webデザイナー

原則として法定業種のデザイナーに該当するので、個人事業税の対象になります。動画クリエイターなども同様の理由で個人事業税の対象になります。

ただし契約内容が業務委託や準委任契約であり、実際にはデザインの内容について大筋依頼主から決められたものが与えられ、手直しやマニュアルに沿って作業するなどといったクリエイターとしての報酬よりも時間給としての意味合いが強い場合には、個人事業税の対象から外れる場合もあります。
*/

/*
https://www.smbc-card.com/hojin/magazine/bizi-dora/tax/enterprise-corporate-tax.jsp
令和2 4/1からちょっと変わるみたい？

    課税所得400万円以下の部分：3.4％
    課税所得400万円超800万円以下の部分：5.1％
    課税所得800万円超の部分：6.7％

*/

export interface CorporationState {
  flag: boolean;
  revenue: number; //売上
  expense: number; //経費
  directorsCompensation: number; //役員報酬
  deduction: number; //控除
  profit: number; //課税所得
  //corporateTaxesEtc: number; //法人税等(法人住民税,法人税,法人事業税)
  //法人税 -> 800万円まで 15%, 800万円超えたら 23.2%
  //法人事業税
  //法人住民税
  //厚生年金保険料
  //印紙税
  //印紙税は、領収書や契約書などの文書にかかる税金です。対象文書に収入印紙を貼り付け、割印を押して納付します。

  //源泉所得税
  //源泉所得税は、役員や社員の給与、税理士、弁護士、司法書士等への報酬に対して課される税金です。
}
export interface RootState {
  version: string;
}
