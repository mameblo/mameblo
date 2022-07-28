import SEO from "../components/layouts/SEO";
import Overview from "../components/service/Overview";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAYのサービス|岡山県倉敷市の個室シェアサロン"}
        description={
          "岡山県倉敷市にあるGOOD-DAY(グッディ)では、お客様とスタイリスト双方に優しいヘアサロンを目指しています。「また行きたい。」そのお声をいただくことが目標です。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,サービス,ご利用のメリット"
        }
        image={"/media/Customer_03.png"}
        url={""}
      />
      <Overview />
    </>
  );
};

export default Service;
