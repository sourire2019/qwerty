import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#/">DASHBOARD</a>
              </li>
              <li>
                <a href="#/blocks">BLOCKS</a>
              </li>
              <li>
                <a href="#/nodes">NODES</a>
              </li>
              <li>
                <a href="#/transactions">TRANSACTIONS</a>
              </li>
              <li>
                <a href="#/chains">CHAINS</a>
              </li>
              <li>
                <a href="#/contracts">CONTRACTS</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            <a href="https://github.com/DSiSc/justitia" >Justitia </a>Copyright
            &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
