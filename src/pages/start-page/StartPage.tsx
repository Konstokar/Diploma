import BlueButton from "../../components/buttons/blue-button";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import styles from "./StartPage.module.scss";

export function StartPage() {
  return (
    <span className={styles.bckgrnd}>
      <BaseLayout>
        <h1 className={styles.question}>
          Хотите достигнуть финансовой цели, но не знаете, как?
        </h1>
        <p>
          Вы пришли по правильному адресу. Наш финансовый помощник “Подберушка”
          поможет вам составить подходящий для вас подборку ценных бумаг на
          бирже и продуктов популярных банокв России
        </p>
        <br />
        <BlueButton text="Начать" onClick={() => {}}></BlueButton>
      </BaseLayout>
    </span>
  );
}
