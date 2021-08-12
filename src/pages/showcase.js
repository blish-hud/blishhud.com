import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './showcase.module.css';

const moduleShowcase = [
  {
    title: <>Marker and Trails Support</>,
    imageUrl: 'img/1615829.png',
    description: (
      <>
        Marker and Paths module supports displaying TacO format .zip and .taco markers in-game.
      </>
    ),
  },
  {
    title: <>Waypoint and Landmark Lookup</>,
    imageUrl: 'img/563468.png',
    description: (
      <>
        Search for Vistas, Waypoints, Dungeons, and more and quickly copy the chat codes to your clipboard.
      </>
    ),
  },
  {
    title: <>KillProof Integration</>,
    imageUrl: 'img/1128503.png',
    description: (
      <>
        A community made module which integrates with <a href="https://killproof.me/" target="_blank">Killproof.me</a> in-game.
      </>
    ),
  }
];

const features = [
  {
    title: <>Focus on Features</>,
    imageUrl: 'img/1769866.png',
    description: (
      <>
        We've got the boring overlay stuff like input handling, settings management, API access delegation, and more handled behind the scenes so you can focus on pushing features.
      </>
    ),
  },
  {
    title: <>Fit Right In</>,
    imageUrl: 'img/156015.png',
    description: (
      <>
        Avoid breaking the immersion.  We've replicated a number of Guild Wars 2's beautiful UI controls and elements within our custom UI framework so that you don't have to.
      </>
    ),
  },
  {
    title: <>Experience Powerful Tools</>,
    imageUrl: 'img/1769855.png',
    description: (
      <>
        Get started quickly with the module template for Visual Studio.  Enjoy first-class debugger support when testing modules in Blish HUD.  Use the Debug module for additional insight at runtime.
      </>
    ),
  },
  {
    title: <>Publish Your Module</>,
    imageUrl: 'img/1948124.png',
    description: (
      <>
        Release your modules through our central repository, making them available to anyone using Blish HUD.  Build your modules however you like and PR a new manifest whenever you make a release.
      </>
    ),
  },
  {
    title: <>Enjoy Comprehensive APIs</>,
    imageUrl: 'img/1228276.png',
    description: (
      <>
        With access to both the GW2 Web API and MumbleLink backed by the powerful <a href="https://github.com/Archomeda/Gw2Sharp" target="_blank">Gw2Sharp</a> .NET library, our own contextualized data, and a pipe of combat data straight from ArcDPS, you'll have everything you need.
      </>
    ),
  },
  {
    title: <>Collaborate on Discord</>,
    imageUrl: 'img/1769865.png',
    description: (
      <>
        Join our <a target="_blank" href="https://discord.gg/HzAV82d">Discord channel</a> (more than 2,000 users!), contribute to Blish HUD development, get help in developing your modules, and showcase your work to other Blish HUD users.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={`Module Showcase`}>
      <main>
        <section className={styles.moduleShowcase}>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--6', styles.features)}>
                    <h1>Events and Metas Observer</h1>
                    <p>Displays upcoming events and metas.  Gives you the option to subscribe to in-game notifications to indicate when it's going to start soon.</p>
                </div>
                <div class={clsx('col col--6')}>
                    <img src="/img/events-hero-half.png" />
                </div>
              </div>
            </div>
        </section>
        <section className={styles.moduleShowcase}>
            <div className="container">
              <div className="row">
                <div class={clsx('col col--6')}>
                    <img src="/img/events-hero-half.png" />
                </div>
                <div className={clsx('col col--6', styles.features)}>
                    <h1>Events and Metas Observer</h1>
                    <p>Displays upcoming events and metas.  Gives you the option to subscribe to in-game notifications to indicate when it's going to start soon.</p>
                </div>
              </div>
            </div>
        </section>
        <section className={styles.moduleShowcase}>
            <div className="container">
              <div className="row">
                <div className={clsx('col col--6', styles.features)}>
                    <h1>Events and Metas Observer</h1>
                    <p>Displays upcoming events and metas.  Gives you the option to subscribe to in-game notifications to indicate when it's going to start soon.</p>
                </div>
                <div class={clsx('col col--6')}>
                    <img src="/img/events-hero-half.png" />
                </div>
              </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
