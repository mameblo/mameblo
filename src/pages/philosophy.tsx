import SEO from "../components/layouts/SEO";
import Features from "../components/philosophy/Features";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"デザインに対する思い|ゼロイチ好きのより所『まめブロ』"}
        description={
          "『想いに寄り添います』『熱量は誰よりも』『圧倒的な脇役』独学でデザインを学んできたからこそ、デザインに対しては人一倍強いこだわりがあります。"
        }
        keyword={
          "デザイン,デザイン思考,こだわり,デザイナー,デザインに対する想い"
        }
        image={"/media/icon1_01.png"}
        url={""}
      />
      <Features />
    </>
  );
};

export default Service;
