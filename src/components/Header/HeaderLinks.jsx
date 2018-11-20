import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import cookie from 'react-cookies'

import compose from "recompose/compose";
import {connect} from "react-redux";
import {tableOperations, tableSelectors} from "state/redux/tables/";

const {
  channelsSelector, 
  currentChannelSelector
} = tableSelectors

const {
  changeChannel,
  channels
} = tableOperations

class HeaderLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      channels : [],
      selectedChannel: {},
      MenuItem : []
    };
  }

  componentDidMount() {
    let arr = [];
    let selectedValue ={};
    let Menu = [];
    if (this.props.channels) {
      this.props.channels.forEach(element => {
      if (element.genesis_block_hash === this.props.currentChannel) {
        selectedValue = {
          value: element.genesis_block_hash,
          label: element.channelname
        };

      }
      arr.push({
        value: element.genesis_block_hash,
        label: element.channelname
      });
      Menu.push (
        <MenuItem key={element.genesis_block_hash} onClick = {() => {this.handleChange(element.genesis_block_hash)}}>{element.channelname}</MenuItem>
      )
    });
    }
    this.setState({
      channels: arr,
      selectedChannel: selectedValue
    });
    setInterval(() => this.syncData(this.props.currentChannel), 5000);
  }

  handleChange = async (selectedChannel) => {

    console.log(selectedChannel);
    this.setState({selectedChannel});
    this.props.getChangeChannel(selectedChannel);
    await this.syncData(selectedChannel);
  };

  async syncData(currentChannel) {
    await Promise.all([
      this.props.getChannels()
    ]);
    this.channels = this.props.getChannels();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channels != undefined) {
      let options = [];
      let selectedValue = {};
      let Menu = [];
      nextProps.channels.forEach(element => {
        options.push({
          value: element.genesis_block_hash,
          label: element.channelname
        });
        Menu.push(
          <MenuItem key={element.genesis_block_hash} onClick = {() => {this.handleChange(element.genesis_block_hash)}}>{element.channelname}</MenuItem>
        )
        if (
          nextProps.currentChannel == null ||
          nextProps.currentChannel == undefined
        ) {
          if (element.genesis_block_hash != null) {
            selectedValue = {
              "value": element.genesis_block_hash,
              "label": element.channelname
            };
          }
        } else if (element.genesis_block_hash === nextProps.currentChannel) {
          selectedValue = {
            value: element.genesis_block_hash,
            label: element.channelname
          };
        }
      });
      
      if (
        nextProps.currentChannel == null ||
        nextProps.currentChannel == undefined
      ) {
        this.props.getChangeChannel(selectedValue);
      }

      this.setState({
        channels: options,
        MenuItem : Menu,
        selectedChannel: selectedValue
      });
      if (nextProps.currentChannel !== this.props.currentChannel) {
        this.syncData(nextProps.currentChannel);
      }
    }
  }

  change = () =>{
    const lang = cookie.load("language") =="zh-CN" ? 'en-US' : 'zh-CN';
    cookie.save("language", lang);
    window.location.reload();
  }
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">{this.state.channels.length}</span>
        <p className="hidden-lg hidden-md">ChangeChains</p>
      </div>
    );
    return (
      <div>
        <Nav pullRight>
          <NavDropdown
            key={1}
            title={notification}
            noCaret
            id="basic-nav-dropdown-right"
          >
            {this.state.MenuItem}
           
          </NavDropdown>
          <NavItem key={2} href="https://github.com/DSiSc/justitia" target="_Blank">
            <i className="fa fa-github" />
            <p className="hidden-lg hidden-md">github</p>
          </NavItem>
          <NavItem key={3} onClick = {() => this.change()}>
            <i className="fa fa-language" />
            <p className="hidden-lg hidden-md">language</p>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export default compose(
  connect(
    state => ({
      currentChannel : currentChannelSelector(state),
      channels : channelsSelector(state)
    }),
    {
      getChannels : channels,
      getChangeChannel: changeChannel
    }
  )
)(HeaderLinks);