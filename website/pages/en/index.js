/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/adrenaline-05.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl("guides/getting-started")}>Get Started</Button>
            <Button href={siteConfig.repoUrl}>Github</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Time, space, and power are all critical for edge deployments. When you use accelerators such as FPGAs and GPUs, managing the low-level software (drivers) to run them can be a challenge. As part of our efforts around the Adrenaline project, we’ve shared tools to ease the management of hardware accelerators in Kubernetes.',
            image: `${baseUrl}img/Open_Source.png`,
            imageAlign: 'left',
            title: 'Opensource',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'The Adrenaline Project only scratches the surface of what’s possible with accelerated edge computing. The uses for edge compute are vast and rapidly evolving. As you plan your edge strategy, be sure to include the capability to manage programmable accelerators and reduce your dependence on single-purpose ASICs. Deploying redundant and flexible platforms is a great way to reduce the time and expense of managing components at thousands or even millions of edge locations. We encourage you to share your experiences and help us add support for a broader set of accelerators. Find out how by checking out our Getting Started page.' ,
            image: `${baseUrl}img/Get_Involved.png`,
            imageAlign: 'right',
            title: 'Get Involved',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              ' Transform the network from a connectivity platform to a connectivity and compute platform with dynamic workload allocation.'
              + 'Get flexibility in how you manage, run, and operate your network and support various workload requirements.'
              + ' Edge computing, orchestration of virtualized applications, and acceleration together enable agile business methods that lead to optimal use of infrastructure to drive down costs, the ability to offer differentiating services that use edge capabilities, quicker time-to-market for new network and application features, and more flexibility to scale capacity up or down as required to meet customer needs.',
            image: `${baseUrl}img/Why_Adrenaline.png`,
            imageAlign: 'right',
            title: 'Why the Adrenaline Project ?',
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Reduce compute latency in applications by employing FPGAs and GPUs.',
            image: `${baseUrl}img/Hardware_Acceleration.png`,
            imageAlign: 'top',
            title: 'Hardware Acceleration',
          },
          {
            content: 'Host applications at the edge to enable low-latency.',
            image: `${baseUrl}img/Edge_Compute.png`,
            imageAlign: 'top',
            title: 'Edge Compute',
          },
          {
            content: ' Standard cloud-native orchestration using Kubernetes with support for the accelerator ecosystem across the network.',
            image: `${baseUrl}img/Centralized_Infras_Management.png`,
            imageAlign: 'top',
            title: 'Centralized Infrastructure Management',
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>Adrenaline is used by </p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          <LearnHow />
          <TryOut />
          <Description />
          {/*<Showcase />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
