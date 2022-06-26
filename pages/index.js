import Head from 'next/head';
import Image from 'next/image';
import { getPlaiceholder } from "plaiceholder";
import LandingPageLayout from '@/layouts/landingPage';
import {
  IndexNav,
  MailchimpFormContainer
} from '@/components/index';
import feature1 from '@/public/images/landingpg_feature1_307.gif';
import feature2 from '@/public/images/landingpg_feature2_v2_307.gif';
import feature3 from '@/public/images/landingpg_feature3_v2_307.gif';

export default function HomePage({ bgImage }) {
  return (
    <LandingPageLayout>
      <header className={''}>
        <div className={''}>
          <IndexNav />

          <div className="lg:flex lg:justify-between lg:flex-row-reverse lg:-mt-5">
            {/* Background Image */}
            <div className="md:mt-5 md:w-[530px] md:flex md:ml-auto lg:-z-10 lg:w-[45%] text-">
              <Image
                {...bgImage}
                alt="pc screen showing the book reading app"
                placeholder="blur"
              />
            </div>

            <div
              id="landing-page-blurb-wrapper"
              className="mx-8 md:hidden lg:!block lg:w-2/3 lg:ml-20 lg:mr-0 lg:mt-custom-clamp"
            >
              <h2
                id="landing-page-blurb"
                className="mx-auto my-4 lg:text-6xl lg:mx-0 lg:font-light lg:text-custom-clamp"
              >
                Experience English with an open mind;
                learn English with creativity.
              </h2>
            </div>
          </div>
        </div>
      </header>

      <main className={'px-8 flex flex-col items-center lg:mx-20 lg:p-0'}>
        <article className={''}>
          <ul className={'md:flex'}>
            <li className={'my-8 md:w-60 md:pr-5 lg:w-1/3'}>
              <figure className={''}>
                <div className={'flex justify-center w-60 mx-auto md:w-40 lg:w-full'}>
                  <Image
                    src={feature1}
                    alt="Interactive Stories Picture"
                  // quality={100}
                  />
                </div>

                <figcaption className={''}>
                  <p className="text-center">Listen and Read amazing stories from all over the world in easy English!</p>
                </figcaption>
              </figure>
            </li>

            <li className={'my-8 md:w-60 md:px-5 lg:w-1/3'}>
              <figure className={''}>
                <div className={'flex justify-center w-60 mx-auto md:w-40 lg:w-full'}>
                  <Image
                    src={feature2}
                    alt="Interactive Stories Picture"
                  // quality={100}
                  />
                </div>

                <figcaption className={''}>
                  <p className="text-center">Learn new words, phrases and expressions while you read. Track your progress with a word count meter</p>
                </figcaption>
              </figure>
            </li>

            <li className={'my-8 md:w-60 md:pl-5 lg:w-1/3'}>
              <figure className={''}>
                <div className={'flex justify-center w-60 mx-auto md:w-40 lg:w-full'}>
                  <Image
                    src={feature3}
                    alt="Interactive Stories Picture"
                  // quality={100}
                  />
                </div>

                <figcaption className={''}>
                  <p className="text-center">Check your comprehension by doing extra activities!</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </article>

        <article className={'md:mt-10'}>
          <h4 className={'text-accent3 text-center mb-9 md:mb-4'}>Sign up to hear more about Cuppa Books!</h4>

          <MailchimpFormContainer />
        </article>
      </main>

      <footer className="flex justify-center my-5">
        Copyright &copy; {new Date().getFullYear()}, Cuppa Kappa and/or its affiliates. All rights reserved.
      </footer>
    </LandingPageLayout >
  );
}

export const getStaticProps = async () => {
  const { base64, img } = await getPlaiceholder("/images/landpage_header2_latest.jpg");

  return {
    props: {
      bgImage: {
        ...img,
        blurDataURL: base64
      }
    }
  };
};

// HomePage.getLayout = page => (
//   <LandingPageLayout>
//     {page}
//   </LandingPageLayout>
// );
