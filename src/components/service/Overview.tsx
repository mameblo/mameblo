// Overviewは、CustomerとToStylistの2つをサービスに渡す
import Link from "next/link";
import Customer from "../../components/service/Customer";
import ToStylist from "../../components/service/ToStylist";
import styles from "../../styles/Service/Service.module.scss";
import Works from "../../components/home/Works";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>Serviced</h2>
        <p className={styles.featuresMainSubTitle}>〜お客様へ〜</p>
        <h2 className={styles.featuresMainTitle}>デザインのご依頼について</h2>
        <>
          {/* <ToStylist /> */}
          <Customer />
          <Works />
        </>
      </div>
    </>
  );
};

export default Overview;
