import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Card from 'components/Card';

import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import {Table} from '@icedesign/base';
import config from './config.json'
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

import Pagination from "react-js-pagination";
import"bootstrap/less/bootstrap.less";
import {tableOperations, tableSelectors} from "./state/redux/tables/";

import compose from "recompose/compose";
import {connect} from "react-redux";
import Dialog from 'react-bootstrap-dialog'
import Transaction from './Transaction'


const {blockList, transaction, channel, dashStats } = tableOperations;
const {channelsSelector, blockListSelector, transactionSelector, currentChannelSelector, dashStatsSelector } = tableSelectors



class TableList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      blockList : [],
      channels : [],
      currentPage : 1,
      dialogOpen: false,
      dialogOpenBlockHash: false,
      transactions : [],
      latestBlock : 0
    };
  }


  async componentDidMount () {

    this.fetchData(this.state.currentPage);

    let arr = [];
    let selectedValue ={}
    await this.props.getChannels()
    const currentChannel = this.props.currentChannel
    await this.props.getblockList(currentChannel, 10, 0)
    await this.props.getTransaction(currentChannel) 
    await this.props.getdashStats(currentChannel)


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
    });
    }
    this.setState({
      channels: arr,
      selectedChannel: selectedValue,
      latestBlock : this.props.dashStats.latestBlock
    });
   setInterval(() => this.syncData(this.props.currentChannel), 5000);
  }

  async syncData(currentChannel) {
    await Promise.all([
      this.props.getblockList(currentChannel,10,0),
      this.props.getChannels(),
      this.props.getdashStats(currentChannel)
    ])
    this.setState({currentPage : 1})
   
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.blockList != undefined) {
      this.setState({blockList : nextProps.blockList, isLoading : false, latestBlock : nextProps.dashStats.latestBlock})
    }
    
  }

  fetchData = async(currentPage) => {
    await this.props.getblockList(this.props.currentChannel,10, currentPage-1)
  };


  changePage = (currentPage) => {
    this.setState({currentPage : currentPage})
    this.fetchData(currentPage);
  };

  handleDialogOpenTransactions = (row) => {
    const data = [];
    row.forEach(element => {
      data.push({
        txhash: element
      })
    })

    this.dialog.show({
      body: <Transaction
            transaction={data}
            transactions = {this.props.transaction}
            getTransaction = {this.props.getTransaction}
          />,
      /*actions: [
        Dialog.CancelAction(),
        Dialog.OKAction()
      ],*/
      onHide: (dialog) => {
        dialog.hide()
      }
    })
  }
 
  handleClose = () => this.setState({ dialogOpen: false })

  render() {
    const columnHeaders = []
    for (let i = 0; i < config.blocks.length; i++) {
      switch (config.blocks[i]) {
        case 'blocknumber' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={
            <FormattedMessage
              id='page.localeProvider.blocknum'
              defaultMessage='blocknum'
              description='blocknum'
            />
            }
            dataIndex="blocknum" width={100} />
        ); break
        case 'chainname' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={
            <FormattedMessage
              id='page.localeProvider.chainname'
              defaultMessage='Chain Name'
              description='Chain Name'
            />
            }
            dataIndex="channelname" width={110} />
        );break
        case 'number_of_tx' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={
              <FormattedMessage
              id='page.localeProvider.num'
              defaultMessage='Number of Tx'
              description='Number of Tx'
            />}
              dataIndex="txcount"
              width={100} />
        );break
        case 'datahash' : columnHeaders.push(
            <Table.Column key = {config.blocks[i]} title={<FormattedMessage
              id='page.localeProvider.datah'
              defaultMessage='datahash'
              description='datahash'
            />}
              dataIndex="datahash"
              width={60} />
        );break

        case 'blockhash' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={<FormattedMessage
            id='page.localeProvider.blockhash'
            defaultMessage='blockhash'
            description='blockhash'
          />}
            dataIndex="blockhash"
            cell= { row =>(
              <span>
                <a
                  className="partialHash"
                  onClick={() => this.handleDialogOpenBlockHash(row)}
                  href="#/blocks"
                >
                  <div className="fullHash" id="showTransactionId">
                    {row}
                  </div>{" "}
                  {row.slice(0, 8)}
                  {!row ? "" : "... "}
                </a>
              </span>
                )}
            width={100} />
        );break
          
        case 'prehash' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={<FormattedMessage
            id='page.localeProvider.prehash'
            defaultMessage='prehash'
            description='prehash'
          />}
            dataIndex="prehash"
            width={200} />
        );break

        case 'transactions' : columnHeaders.push(
          <Table.Column key = {config.blocks[i]} title={<FormattedMessage
            id='page.localeProvider.transactions'
            defaultMessage='transactions'
            description='transactions'
          />}
            dataIndex="txhash"
            cell= { row =>(
              <span>
                <button
                  className="partialHash"
                  onClick={() => this.handleDialogOpenTransactions(row)}
                  disabled= {row ? "" : "disabled"}
                  href="#/blocks"
                >
                  <div className="fullHash" id="showTransactionId">
                    <FormattedMessage
                    id="page.localeProvider.details"
                    defaultMessage="Details"
                    description="Details"
                    />
                  </div>{" "}
                    <FormattedMessage
                    id="page.localeProvider.details"
                    defaultMessage="Details"
                    description="Details"
                    />
                </button>{" "}
              </span>
            )}
            width={100} />
        );break

        default : break
      }
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div >
                    <Table
                      dataSource={this.state.blockList}
                      isLoading={this.state.isLoading}
                      className="basic-table"
                      hasBorder={false}
                    >
                      {columnHeaders}
                    </Table>
                    <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={10}
                      totalItemsCount={this.state.latestBlock}
                      pageRangeDisplayed={4}
                      onChange={this.changePage}
                    />
                  </div>
                }
              />
            </Col>

          </Row>
        </Grid>
        <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    );
  }
}

export default compose(
  connect(
    state => ({
      currentChannel: currentChannelSelector(state),
      channels : channelsSelector(state),
      blockList : blockListSelector(state),
      dashStats : dashStatsSelector(state),
      transaction: transactionSelector(state)
    }),
    {
      getblockList: blockList,
      getChannels : channel,
      getdashStats : dashStats,
      getTransaction : transaction
    }
  )
)(TableList);