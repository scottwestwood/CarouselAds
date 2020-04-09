// @flow

// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import '../DummyAd/DummyAd.scss';

/**
 * DummyAd React Type component.
 */
class DummyAd extends PureComponent<*, *> {
  static propTypes = {
    children: PropTypes.func,
    extendStyle: PropTypes.string,
  };

  /**
   * Render
   * @returns {ReactElement} markup
   */
  render() {
    return <div className="wrapper">card</div>;
  }
}

export default DummyAd;
