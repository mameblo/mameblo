// これはTopPageを表示している
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import Works from "../components/home/Works";
import Staffs from "../components/staff/Staffs";
import styles from "../styles/Home.module.scss";
import Styles from "../components/gallery/styles";
import type { Article } from "../../types/article";
import TopCarousel from "../components/home/TopCarousel";
import MakeFriends from "../components/home/MakeFriends";
import NakashimaShopInfo from "../components/shop/Nakashima";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <SEO
        title={"GOOD-DAY(グッディ)|岡山県倉敷市の個室シェアサロン"}
        description={
          "岡山県倉敷市にあるBeauty Hair Salon GOOD-DAY(グッディ)では、独立したい美容師さんを応援しています。全ての美容師に夢を与えられるようなシェアサロンを目指しています。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援"
        }
        image={"/media/GOOD-DAY_mainLogo_05.png"}
        url={""}
      />
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <TopCarousel />
        <div className={styles.articleArea}>
          <h2 className={styles.articleMainTitle}>News &amp; Topics</h2>
          {articles.map((article) => (
            <div className={styles.articleSingle} key={article.id}>
              <div className={styles.articleFlex}>
                <div className={styles.articleLeft}>
                  <Link href={`/article/${article.id}`} passHref>
                    <a>
                      <Image
                        className={styles.articleImage}
                        src={article.eye_catch.url}
                        objectFit="contain"
                        alt={article.title + "の画像です"}
                        width={240}
                        height={240}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.articleRight}>
                  <div className={styles.articleSubTitle}>
                    <Link href={`/article/${article.id}`} passHref>
                      <a>{article.title}</a>
                    </Link>
                  </div>
                  {/* Prevent HTML tags from being output */}
                  <Link href={`/article/${article.id}`} passHref>
                    <a>
                      <div className={styles.articleBody}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${article.body}`,
                          }}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className={styles.articleTag}>
                    {article.tag && <p className="">#{article.tag}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Staffs />
        <Styles />
        <MakeFriends />
        <Works />
        <NakashimaShopInfo />
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "articles",
    queries: { limit: 3, offset: 0 },
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};
