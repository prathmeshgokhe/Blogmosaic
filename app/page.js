import { CustomCard } from "@/components/CustomCards";
import styles from "@/styles/home.module.scss";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.cover}>
        <Image
          width={1800}
          hei
          radius="none"
          alt="NextUI Fruit Image with Zoom"
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.cards}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
      {/* <div className="flex"></div> */}
    </div>
  );
}
