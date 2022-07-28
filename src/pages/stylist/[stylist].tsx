// ここはStylist単体のPageを表示している
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import type { Stylist } from "../../../types/stylist";
import styles from "../../styles/Stylist/Detail.module.scss";
import HamburgerMenu from "../../components/layouts/HamburgerMenu";
// 各スタイリストのSNSを読み込む(暫定適用)
import KatayamaSNS from "../../components/sns/KatayamaSNS";
import MikaSNS from "../../components/sns/MikaSNS";
import NozomiSNS from "../../components/sns/NozomiSNS";
import NatsukiSNS from "../../components/sns/NatsukiSNS";
import DaiSNS from "../../components/sns/DaiSNS";
import JohnSNS from "../../components/sns/JohnSNS";
import FujiiSNS from "../../components/sns/FujiiSNS";
import IkemotoSNS from "../../components/sns/IkemotoSNS";
import MaiSNS from "../../components/sns/MaiSNS";
import YukaSNS from "../../components/sns/YukaSNS";
import MahoSNS from "../../components/sns/MahoSNS";
import NamiSNS from "../../components/sns/NamiSNS";
// 各スタイリストのMenuを読み込む(暫定適用)
import Katayama from "../../components/menu/Katayama";
import Mika from "../../components/menu/Mika";
import Nozomi from "../../components/menu/Nozomi";
import Natsuki from "../../components/menu/Natsuki";
import Dai from "../../components/menu/Dai";
import John from "../../components/menu/John";
import Fujii from "../../components/menu/Fujii";
import Ikemoto from "../../components/menu/Ikemoto";
import Mai from "../../components/menu/Mai";
import Yuka from "../../components/menu/Yuka";
import Maho from "../../components/menu/Maho";
import Nami from "../../components/menu/Nami";
// 各スタイリストのPaginationを読み込む(暫定適用)
import KatayamaPagination from "../../components/pagination/KatayamaPagination";
import MikaPagination from "../../components/pagination/MikaPagination";
import NozomiPagination from "../../components/pagination/NozomiPagination";
import NatsukiPagination from "../../components/pagination/NatsukiPagination";
import DaiPagination from "../../components/pagination/DaiPagination";
import JohnPagination from "../../components/pagination/JohnPagination";
import FujiiPagination from "../../components/pagination/FujiiPagination";
import IkemotoPagination from "../../components/pagination/IkemotoPagination";
import MaiPagination from "../../components/pagination/MaiPagination";
import YukaPagination from "../../components/pagination/YukaPagination";
import MahoPagination from "../../components/pagination/MahoPagination";
import NamiPagination from "../../components/pagination/NamiPagination";

type Props = {
  stylist: Stylist;
};

export default function Stylist({ stylist }: Props) {
  const stylistIds: number[] = [stylist.stylist_id];
  return (
    <>
      <HamburgerMenu />
      <div className={styles.detailArea}>
        <Link href={"/stylist"} passHref>
          <a>
            <h2 className={styles.detailMainTitle}>Stylist</h2>
          </a>
        </Link>
        <div className={styles.detailFlex}>
          <div className={styles.detailImage}>
            <Image
              className=""
              src={stylist.eye_catch.url}
              objectFit="contain"
              alt={stylist.title + "の画像です"}
              width={1000}
              height={720}
            />
          </div>
          <div className={styles.detailRight}>
            <div>
              <Link href={stylist.url} passHref>
                <a>
                  <div className={styles.detailSubTitle}>{stylist.title}</div>
                </a>
              </Link>
              {/* ここでstylistIdを認識して、各自のSNSメニューを表示する */}
              {/* <div>
                {stylistIds.map((id) => {
                  return (
                    <div key={id}>
                      {( () => {
                        if (!id == null) {
                          return <></>;
                        } else if (id == 1) {
                          return <KatayamaSNS />;
                        } else if (id == 2) {
                          return <MikaSNS />;
                        } else if (id == 3) {
                          return <NozomiSNS />;
                        } else if (id == 4) {
                          return <NatsukiSNS />;
                        } else if (id == 5) {
                          return <DaiSNS />;
                        } else if (id == 6) {
                          return <JohnSNS />;
                        } else if (id == 7) {
                          return <FujiiSNS />;
                        } else if (id == 8) {
                          return <IkemotoSNS />;
                        } else if (id == 9) {
                          return <MaiSNS />;
                        } else if (id == 10) {
                          return <YukaSNS />;
                        } else if (id == 11) {
                          return <MahoSNS />;
                        } else if (id == 12) {
                          return <NamiSNS />;
                        }
                      }) () };
                    </div>
                  );
                })}
              </div> */}
              {/* ここでstylistIdを認識して、各自のSNSメニューを表示する2 */}
              <div>
                {stylistIds.map((id) => {
                  return (
                    <div key={id}>
                      {id == 1 && <KatayamaSNS />}
                      {id == 2 && <MikaSNS />}
                      {id == 3 && <NozomiSNS />}
                      {id == 4 && <NatsukiSNS />}
                      {id == 5 && <DaiSNS />}
                      {id == 6 && <JohnSNS />}
                      {id == 7 && <FujiiSNS />}
                      {id == 8 && <IkemotoSNS />}
                      {id == 9 && <MaiSNS />}
                      {id == 10 && <YukaSNS />}
                      {id == 11 && <MahoSNS />}
                      {id == 12 && <NamiSNS />}
                    </div>
                  );
                })}
              </div>
              <div className={styles.tag}>
                {stylist.tag && (
                  <div className={styles.detailTag}>
                    <div className="">#{stylist.tag}</div>
                  </div>
                )}
              </div>
              <div>
                {/* Prevent HTML tags from being output */}
                <div
                  className={styles.detailProfile}
                  dangerouslySetInnerHTML={{
                    __html: `${stylist.profile}`,
                  }}
                />
              </div>
              <div className={styles.next}>
                <Link href={stylist.url} passHref>
                  <a className={styles.nextInner}>
                    <span className={styles.nextInnerIn}>Web予約する</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailBody}>
          {/* Prevent HTML tags from being output */}
          <div
            dangerouslySetInnerHTML={{
              __html: `${stylist.body}`,
            }}
          />
        </div>
        {/* ここで各自のstyleを表示 */}
        <h2 className={styles.detailMainTitle}>Hair Style</h2>
        <div className={styles.detailStyle}>
          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style1.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={800}
            />
          </div>
          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style2.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={800}
            />
          </div>
          <div className={styles.detailStyleImage}>
            <Image
              className=""
              src={stylist.style3.url}
              objectFit="contain"
              alt={stylist.title + "のスタイルです。"}
              width={1000}
              height={800}
            />
          </div>
        </div>
        {/* ここでstylistIdを認識して、各自のメニューを表示します。 */}
        <div>
          {stylistIds.map((id) => {
            return (
              <div key={id}>
                {id == 1 && <Katayama />}
                {id == 2 && <Mika />}
                {id == 3 && <Nozomi />}
                {id == 4 && <Natsuki />}
                {id == 5 && <Dai />}
                {id == 6 && <John />}
                {id == 7 && <Fujii />}
                {id == 8 && <Ikemoto />}
                {id == 9 && <Mai />}
                {id == 10 && <Yuka />}
                {id == 11 && <Maho />}
                {id == 12 && <Nami />}
              </div>
            );
          })}
        </div>
        <p className={styles.menuDetail}>
          ※所要時間につきましては、当日の予約状況により変動する可能性もございます。
        </p>
        <p className={styles.menuDetail}>
          ※上記メニュー意外にもキャンペーン価格やセットメニューがございます。詳しい内容はスタイリストまでご連絡ください。
        </p>
        <div className={styles.next}>
          <Link href={stylist.url} passHref>
            <a className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Web予約する</span>
            </a>
          </Link>
        </div>
        {/* ここでstylistIdを認識して、各自のページネーションを表示(暫定適用) */}
        <div>
          {stylistIds.map((id) => {
            return (
              <div key={id}>
                {id == 1 && <KatayamaPagination />}
                {id == 2 && <MikaPagination />}
                {id == 3 && <NozomiPagination />}
                {id == 4 && <NatsukiPagination />}
                {id == 5 && <DaiPagination />}
                {id == 6 && <JohnPagination />}
                {id == 7 && <FujiiPagination />}
                {id == 8 && <IkemotoPagination />}
                {id == 9 && <MaiPagination />}
                {id == 10 && <YukaPagination />}
                {id == 11 && <MahoPagination />}
                {id == 12 && <NamiPagination />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.stylist;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "stylists",
    contentId: idExceptArray,
  });

  return {
    props: {
      stylist: data,
    },
  };
};
