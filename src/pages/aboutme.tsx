import SEO from "../components/layouts/SEO";
import NewShop from "../components/company/NewShop";
import Nakashima from "../components/company/Nakashima";
import Corporation from "../components/company/Corporation";

const Company: React.FC = () => {
  return (
    <>
      <SEO
        title={"ゼロイチ好きのより所『まめブロ』"}
        description={
          "GOOD-DAYを運営している株式会社OneStepと申します。ワンステップでは全ての美容師に夢を与えられるような事業を展開していきたいと思います。「目指せ100店舗」を目標に全国の美容師さんに安心して働ける環境を提供します。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,会社概要"
        }
        image={"/media/OneStep_logo_00.png"}
        url={""}
      />
      <NewShop />
    </>
  );
};

export default Company;
