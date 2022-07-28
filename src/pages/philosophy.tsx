import SEO from "../components/layouts/SEO";
import Features from "../components/philosophy/Features";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"GOOD-DAY経営理念|岡山県倉敷市の個室シェアサロン"}
        description={
          "時代に合った、新しい働き方を…。GOOD-DAYは、美容師に「美容師で良かった」と感じてもらえるような環境を創ることを目標としています。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,理念,経営理念"
        }
        image={"/media/GOOD-DAY_mainImage_00.jpg"}
        url={""}
      />
      <Features />
    </>
  );
};

export default Service;
