// これはTopPageを表示している
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import type { Portfolio } from "../types/portfolio";
import styles from "../styles/Stylist/Stylist.module.scss";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  portfolios: Array<Portfolio>;
};

export default function Stylist({ portfolios }: Props) {
  return (
    <>
      <SEO
        title={"ポートフォリオ|ゼロイチ好きのより所『まめブロ』"}
        description={
          "Beauty Hair Salon GOOD-DAY(グッディ)では、美容師の仕事が大好きでたまらないスタイリストが在籍しています。それぞれ違う魅力を持ったあなただけのお気に入りの美容師に出会えますように。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,スタイリスト,スタイリスト一覧"
        }
        image={"/media/GOOD-DAY_stylists.jpg"}
        url={""}
      />
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <div className={styles.stylistArea}>
          <h2 className={styles.stylistMainTitle}>Portfolio</h2>
          <div className={styles.stylistMainTitleText}>作品一覧</div>
          <div className={styles.stylistColumn}>
            {portfolios.map((portfolio) => (
              <div className={styles.illustSingle} key={portfolio.id}>
                <div className={styles.img}>
                  <Image
                    src={portfolio.eye_catch.url}
                    objectFit="contain"
                    alt={portfolio.title + "の画像です"}
                    width={400}
                    height={400}
                  />
                </div>
                <div className={styles.stylistSubTitle}>
                  <a>{portfolio.title}</a>
                </div>
                {/* <div className={styles.stylistTag}>
                  {stylist.tag && <span className="">#{stylist.tag}</span>}
                </div> */}
                <div className={styles.next}>
                  <Link href={`/portfolio/${portfolio.id}`}>
                    <a className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>もっとみる</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>
        <br></br>
        <br></br>
        <br></br>
      </p>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "portfolios",
    queries: { limit: 100, offset: 0 },
  });

  return {
    props: {
      portfolios: data.contents,
    },
  };
};
