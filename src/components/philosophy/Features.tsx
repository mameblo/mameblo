import Link from "next/link";
import styles from "../../styles/philosophy/Philosophy.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>Philosophy</h2>
        <p className={styles.featuresMainSubTitle}>
          デザインと向き合う上で大切にしたいこと
        </p>
        <div className={styles.featuresArea}>
          <>
            <h2 className={styles.featuresTitle}>
              一つ一つのデザインに思いを込めています。
            </h2>
            <div className={styles.featuresDescription}>
              「デザイン」と言っても、様々な種類のデザインがあります。
              <br />
              <br />
              『紙媒体かWEB媒体か媒体か』この違いだけでもデザインの根本的な考え方は一緒であっても、重要視するべきポイントが少し違ったりします。
              <br />
              例えば『名刺のデザイン』ひとつにフォーカスしてみても、やはりお客様によってデザインする時に大切にするべきポイントは変わります。
              <br />
              <br />
              なので私のデザインにテンプレートは存在しません。
              <br />
              <br />
              効率よくデザインをすることももちろん大切ですが、一つひとつのデザインに真剣に向き合いたいです。
              <br />
              <br />
              それに、やっぱり「世界に一つだけ」といったデザインができた時が一番幸せです。
              <br />
              だからこそ、デザインを依頼してくださったあなたの想いに寄り添い、その想いを知らないとできなかったデザイン　をこの世界に生み出したい。
              <br />
              <br />
              そう、強く思っています。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>熱量は誰よりも。</h2>
            <div className={styles.featuresDescription}>
              デザイン業界に何十年もいらっしゃるベテランな方と比べると、スキルで劣ってしまうところはあるかもしれません。
              <br />
              <br />
              ただ、私には私にしかできないデザインがあります。
              <br />
              <br />
              なぜならデザインが好きだからです。
              <br />
              デザインの道を否定され、それでも諦めきれずに独学でデザインを学んでデザイナーになった程好きです。
              <br />
              <br />
              「言語化できないもの」、「言葉だけでは伝えられない情報」を私なりのアレンジを加えたアウトプットで作り出したデザインで、
              <br />
              誰かに何かを伝えられるなんて、素敵じゃないですか。
              <br />
              <br />
              最高に楽しいです。デザイン。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>何を伝えたいかが一番大事。</h2>
            <div className={styles.featuresDescription}>
              デザインはあくまで脇役です。
              <br />
              <br />
              デザインをこんなに好きな私が言うのもなんですが、「デザインは脇役」なんです。
              <br />
              <br />
              あなたが伝えたいことが主役です。
              <br />
              <br />
              でも、主役だけだとドラマは成り立たない。
              <br />
              <br />
              圧倒的な脇役の人は、主役の輝きを邪魔せずに主役の光をさらに強くする最高な人だと思っています。
              <br />
              <br />
              デザインもこの脇役と全く同じだと捉えています。
              <br />
              <br />
              だからこそ、伝えたいことが何かわからない。ではなく、「伝えたいことがダイレクトにわかる。」
              <br />
              <br />
              それが究極にシンプルでも、それこそがデザインだと思っていますし、そんなデザインを目指しています。
            </div>
          </>
          <div className={styles.next}>
            <Link href={"/service"} passHref>
              <a className={styles.nextInner}>
                <span className={styles.nextInnerIn}>デザイン例をみる</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
