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

export default function SNS() {
  return (
    <>
      <KatayamaSNS />
      <MikaSNS />
      <NozomiSNS />
      <NatsukiSNS />
      <DaiSNS />
      <JohnSNS />
      <FujiiSNS />
      <IkemotoSNS />
      <MaiSNS />
      <YukaSNS />
      <MahoSNS />
      <NamiSNS />
    </>
  );
}
