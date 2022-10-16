import SEO from "../components/layouts/SEO";
import Overview from "../components/service/Overview";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"サービス一覧|ゼロイチ好きのより所『まめブロ』"}
        description={
          "A4チラシデザイン,ロゴ制作,名刺作成,バナー画像作成など、デザインのご依頼はこちらから"
        }
        keyword={
          "デザイン依頼,サービス,A4チラシ,名刺デザイン,ロゴデザイン,バナー画像作成"
        }
        image={"/media/flyer09.jpg"}
        url={""}
      />
      <Overview />
    </>
  );
};

export default Service;
