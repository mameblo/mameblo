// これはTopPageを表示している
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import type { Stylist } from "../../types/stylist";
import styles from "../styles/Stylist/Stylist.module.scss";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  stylists: Array<Stylist>;
};

export default function Stylist({ stylists }: Props) {
  return (
    <>
      <SEO
        title={"GOOD-DAYスタイリスト一覧|岡山県倉敷市の個室シェアサロン"}
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
          <h2 className={styles.stylistMainTitle}>Stylist</h2>
          <div className={styles.stylistMainTitleText}>スタイリスト一覧</div>
          <div className={styles.stylistColumn}>
            {stylists.map((stylist) => (
              <div className={styles.stylistSingle} key={stylist.id}>
                <Link
                  className={styles.stylistImage}
                  href={`/stylist/${stylist.id}`}
                  passHref
                >
                  <a>
                    <Image
                      src={stylist.eye_catch.url}
                      objectFit="contain"
                      alt={stylist.title + "の画像です"}
                      width={1000}
                      height={1000}
                    />
                  </a>
                </Link>
                <div className={styles.stylistSubTitle}>
                  <Link href={`/stylist/${stylist.id}`} passHref>
                    <a>{stylist.title}</a>
                  </Link>
                </div>
                <div className={styles.stylistTag}>
                  {stylist.tag && <span className="">#{stylist.tag}</span>}
                </div>
                <div className={styles.next}>
                  <Link href={stylist.url} passHref>
                    <a className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>Web予約する</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "stylists",
    queries: { limit: 20, offset: 0 },
  });

  return {
    props: {
      stylists: data.contents,
    },
  };
};
