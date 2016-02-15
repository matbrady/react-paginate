'use strict';

import React from 'react';

export default class PageView extends React.Component {
  render() {
    let linkClassName   = this.props.pageLinkClassName;
    let cssClassName    = this.props.pageClassName;
    let accessibleLabel = `page ${this.props.page}`;

    // Check if the PageView is the selected page
    if (this.props.selected) {
      // append active page text to accessible label
      accessibleLabel = `You're currenly on ${accessibleLabel}`;
      // IF cssClassName exists:
      if (typeof(cssClassName) !== 'undefined') {
        // append activeClassName
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else { // ELSE
        // set default classname
        cssClassName = this.props.activeClassName;
      }
    }

    return (
        <li className={cssClassName}>
          <a
            {...this.props}
            href="#" 
            className={linkClassName}
            aria-disabled={this.props.selected}
            aria-label={accessibleLabel}
          >
            {this.props.page}
          </a>
        </li>
    );
  }
};
