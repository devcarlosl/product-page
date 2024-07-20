import { fetchProductData } from "@/services/fetchProductData";

import NeedHelp from "@/commons/NeedHelp";
import Breadcrumb from "@/commons/Breadcrumb";
import FindInstaller from "@/commons/FindInstaller";

import ProductCards from "@/products/ProductCards";
import ProductBanner from "@/products/ProductBanner";

import styles from "./page.module.css";

async function Home() {
  const data = await JSON.parse(await fetchProductData());

  return (
    <main className={styles.main}>
      <section>
        <ProductBanner productInfo={data.nodeQuery.entities[0]} />
      </section>
      <section>
        <ProductCards
          descriptions={data.nodeQuery.entities[0].fieldProductDescription}
        />
      </section>
      <section>
        <FindInstaller />
      </section>
      <section>
        <NeedHelp />
      </section>
      <section>
        <Breadcrumb />
      </section>
    </main>
  );
}

export default Home;
