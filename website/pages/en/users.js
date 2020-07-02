/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const captionStyle = {
      color: "blue",
      marginLeft: "-10px",
      marginTop: "-10px",
      fontFamily: "Arial"
    };
    const companyInfo = {
      color: "black",
      fontFamily: "Arial"
    };
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
        {/*<p style={companyInfo}>*/}
        {/*  {(() => {*/}
        {/*    switch (user.caption) {*/}
        {/*      case "CableLabs":   return "To develop transformative life-changing innovations that are globally adoptable, scalable, and move communities towards a more connected tomorrow.";*/}
        {/*      case "Altran": return "Altran is a global engineering and R&D services company. We focus on the latest technologies that determine a company's ability to compete on speed.";*/}
        {/*    }*/}
        {/*  })()}*/}
        {/*</p>*/}
        <p style={captionStyle}>{user.caption}</p>
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is using Adrenaline ? </h1>
              {/*<p>This project is used by many folks</p>*/}
            </div>
            <div className="logos">{showcase}</div>
            {/*<p>Are you using this project?</p>*/}
            {/*<a href={editUrl} className="button">*/}
            {/*  Add your company*/}
            {/*</a>*/}
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
