import Link from "next/link";
import Image from "next/image";
import MapPage from "../components/company/MapPage";
import SEO from "../components/layouts/SEO";
import Recruitment from "../components/recruit/Recruitment";

export default function Recruit() {
  return (
    <>
      <SEO
        title={"GOOD-DAYご利用について|岡山県倉敷市の個室シェアサロン"}
        description={
          "岡山県倉敷市にあるシェアサロンGOOD-DAY(グッディ)では、フリーランススタイリストさんに店舗をご利用いただいています。グッディでは会員登録後、好きな時に好きなだけ店舗を利用できます。"
        }
        keyword={
          "岡山県,倉敷市,美容室,シェアサロン,GOOD-DAY,グッディ,独立,独立支援,会員,会員登録"
        }
        image={"/media/Stylist_05.png"}
        url={""}
      />
      <Recruitment />
    </>
  );
}
