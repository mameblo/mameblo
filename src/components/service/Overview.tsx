// Overviewは、CustomerとToStylistの2つをサービスに渡す
import Link from "next/link";
import Customer from "../../components/service/Customer";
import ToStylist from "../../components/service/ToStylist";
import styles from "../../styles/Service/Service.module.scss";

const Overview: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.featuresMainTitle}>Serviced</h2>
        <p className={styles.featuresMainSubTitle}>GOOD-DAYのサービス概要</p>
        <>
          <Customer />
          <ToStylist />
        </>
      </div>
    </>
  );
};

export default Overview;
