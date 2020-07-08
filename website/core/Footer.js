/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CookieConsent = require("react-cookie-consent");
// const styles = require('./../static/css/custom.css')
const cookieBanner = {
  position: 'fixed',
  bottom: '40px',
  left: '10%',
  right: '10%',
  width: '80%',
  padding: '5px 14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#0c0606',
  borderRadius: '5px',
  boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.2)'
};
const fadeOut = {
  opacity:'0',
  width:'0',
  height:'0',
  transition: 'width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s'
}
const fadeIn = {
  opacity:'1',
  width:'100px',
  height:'100px',
  transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s'
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingAlert: false
    }
  }

  handleClickShowAlert() {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);
  }

  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }
  cookieConsentHandler () {
    console.log('\n localStorage : ' + JSON.stringify(localStorage))
    console.log('\n showingAlert : ' + JSON.stringify(this.state.showingAlert))
    if (localStorage.getItem('cookieSeen') != 'shown') {
      // this.refs['cookie-banner'].delay(2000).fadeIn();
      localStorage.setItem('cookieSeen','shown')
    }
    this.setState({
      showingAlert: false
    });
    // this.refs['cookie-banner'].fadeOut();

  }
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('guides/getting-started', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('communityInfo/community-info-coc', this.props.language)}>
              Code of Conduct
            </a>
            <a href={this.docUrl('communityInfo/community-info-contributing', this.props.language)}>
              Contributing
            </a>
            <a href={this.docUrl('communityInfo/community-info-license', this.props.language)}>
              License
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Members
            </a>
            {/*<a href="https://discordapp.com/">Project Chat</a>*/}
            <a
              href="https://www.linkedin.com/company/open-adrenaline/"
              target="_blank"
              rel="noreferrer noopener">
              LinkedIn
            </a>
            <a
              href=" https://twitter.com/OpenAdrenaline"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/cablelabs/adrenaline-docs">GitHub</a>
            <a href={`${this.props.config.baseUrl}pdf/Adrenaline_solution_overview.pdf`} target = "_blank">Flyer</a>
            {/*<a href="https://github.com/cablelabs/adrenaline-docs">Webinar</a>*/}
            <a href="https://community.cablelabs.com/wiki/plugins/servlet/cablelabs/alfresco/download?id=2c46cef2-af44-47be-bdd4-98a948cbc60d">Whitepaper</a>

            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
        <div className={ this.state.showingAlert?`${fadeIn}`:`${fadeOut}`}>
          <div id='cookie-banner'  style={{
            position: 'fixed',
            bottom: '20px',
            left: '25%',
            right: '25%',
            width: '50%',
            margin:'20px',
            padding: '15px 15px 15px 15px',
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'space-evenly',
            backgroundColor: '#070303',
            color: 'white',
            borderRadius: '5px',
            fontSize:'15px',
            fontFamily: 'soleto,sans-serif',
            lineHeight: '1.25em',
            boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.2)'
          }}>
            <p style={{
              marginTop:'15px'
            }}>CableLabs.com uses cookies to provide you the best experience. <a style={{color:'grey'}} href="https://www.cablelabs.com/privacy-policy" target="_blank">Learn More</a></p>.
            <button id='close' type="button" style={{
              backgroundColor: 'red',
              border: 'none',
              color: 'white',
              padding: '15px 32px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '15px',
              margin: '4px 2px',
              cursor: 'pointer'
            }} onClick={this.cookieConsentHandler.bind(this)}>Got It!</button>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
