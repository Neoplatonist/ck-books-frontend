import Head from 'next/head';
import Image from 'next/image';
import {
  Button,
  IndexNav,
  Layout,
  MailchimpFormContainer
} from '@/components/index';
import styles from '@/styles/Index.module.css';

export default function HomePage({ allCategories }) {
  return (
    <Layout>
      <Head>
        <title>Books | Cuppa Kappa</title>
        <meta name="description" content="Learn english with creativity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles["l-header"]}>
        <div className={styles["l-header__wrapper"]}>
          <IndexNav />

          {/* Background Image */}
          <div className={styles["l-header__bg"]}>
            <Image
              src="/images/landpage_header2.jpg"
              alt="pc screen showing the book reading app"
              height={729}
              width={734}
              quality={100}
              priority={true}
            />
          </div>

          <div className={styles["c-header-body"]}>
            <p className={styles["c-header-body__text"]}>
              Experience English with an open <br /> mind,
              learn English with creativity.
            </p>

            <div className={styles["c-header-body__button"]}>
              <Button variant="jumbo">
                Coming Soon!
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles["l-main-content"]}>
        <article className={styles["l-about"]}>
          <ul className={styles["l-about-list"]}>
            <li className={styles["l-about-list__item"]}>
              <figure className={styles["c-about-figure"]}>
                <div className={styles["c-about-figure__img"]}>
                  <Image
                    src="/images/landingpg_feature1_307.gif"
                    alt="Interactive Stories Picture"
                    layout="fill"
                    quality={100}
                  />
                </div>

                <figurecaption className={styles["c-about-figure__caption"]}>
                  <h3>Listen and Read amazing stories from all over the world in easy English!</h3>
                </figurecaption>
              </figure>
            </li>

            <li className={styles["l-about-list__item"]}>
              <figure className={styles["c-about-figure"]}>
                <div className={styles["c-about-figure__img"]}>
                  <Image
                    src="/images/landingpg_feature2_v2_307.gif"
                    alt="Interactive Stories Picture"
                    layout="fill"
                    quality={100}
                  />
                </div>

                <figurecaption className={styles["c-about-figure__caption"]}>
                  <h3>Learn new words, phrases and expressions while you read. Track your progress with a word count meter</h3>
                </figurecaption>
              </figure>
            </li>

            <li className={styles["l-about-list__item"]}>
              <figure className={styles["c-about-figure"]}>
                <div className={styles["c-about-figure__img"]}>
                  <Image
                    src="/images/landingpg_feature3_v2_307.gif"
                    alt="Interactive Stories Picture"
                    layout="fill"
                    quality={100}
                  />
                </div>

                <figurecaption className={styles["c-about-figure__caption"]}>
                  <h3>Check your comprehension by doing extra activities!</h3>
                </figurecaption>
              </figure>
            </li>
          </ul>
        </article>

        <article className={styles["l-subscribe"]}>
          <p className={styles["l-subscribe__body"]}>Sign up to hear more about Cuppa Books!</p>

          <MailchimpFormContainer />
        </article>
      </main>
    </Layout>
  );
}

