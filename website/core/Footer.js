/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import $ from 'jquery'
var ls = require('local-storage');


class Footer extends React.Component {

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
            <a href="https://www.lightreading.com/webinar.asp?webinar_id=1627">Webinar</a>
            <a href="https://community.cablelabs.com/wiki/plugins/servlet/cablelabs/alfresco/download?id=2c46cef2-af44-47be-bdd4-98a948cbc60d">Whitepaper</a>
            <a href="https://www.cablelabs.com/privacy-policy/">Privacy Policy</a>

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
       </footer>
    );
  }
}

module.exports = Footer;
