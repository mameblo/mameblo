// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import SEO from "../../components/layouts/SEO";
import type { Portfolio } from "../../types/portfolio";
import styles from "../../styles/Stylist/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";
import React from "react";

type Props = {
  portfolio: Portfolio;
};

export default function Portfolio({ portfolio }: Props) {
  const portfolioIds: number[] = [portfolio.portfolio_id];
  return (
    <>
      <SEO
        title={portfolio.title + " | " + portfolio.subTitle}
        description={portfolio.description}
        keyword={portfolio.keyword}
        image={portfolio.eye_catch.url}
        url={`/poetfolio/${portfolio.id}`}
      />
      <HamburgerMenu />
      <div className={styles.detailArea}>
        <div>
          <br></br>
        </div>
        <Link href={"/portfolio"} passHref>
          <a>
            <h2 className={styles.detailMainTitle}>Portfolio</h2>
          </a>
        </Link>
        <div className={styles.detailFlex}>
          <div className={styles.detailImage}>
            <Image
              className=""
              src={portfolio.eye_catch.url}
              objectFit="contain"
              alt={portfolio.title + "の画像です"}
              width={500}
              height={500}
            />
          </div>
          <div className={styles.detailRight}>
            <div>
              <div>
                <br></br>
              </div>
              <div>
                <br></br>
              </div>
              <div>
                <br></br>
              </div>
              <Link href={portfolio.url} passHref>
                <a>
                  <div className={styles.detailSubTitle}>{portfolio.title}</div>
                </a>
              </Link>
              <div className={styles.detailbody}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${portfolio.subTitle}`,
                  }}
                />
              </div>
              <div>
                <p>
                  <br></br>
                </p>
              </div>
              <div>
                <br></br>
              </div>
              <div
                className={styles.detailbody}
                dangerouslySetInnerHTML={{
                  __html: `${portfolio.body}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.menuDetail}></p>
      <p className={styles.menuDetail}>
        他の作品もございます。いろんな思いを込めておりますのでご覧ください
      </p>
      <br></br>
      <br></br>
      <div className={styles.next}>
        <Link href={"/portfolio"} passHref>
          <a className={styles.nextInner}>
            <span className={styles.nextInnerIn}>他の作品も見る</span>
          </a>
        </Link>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.portfolio;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "portfolios",
    contentId: idExceptArray,
  });

  return {
    props: {
      portfolio: data,
    },
  };
};
