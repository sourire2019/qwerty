import React, {Component} from "react";
import {FormattedMessage} from 'react-intl';
import Dialog from 'react-bootstrap-dialog'
import {Table} from '@icedesign/base';
import './main.css';
import TransactionDetail from './TransactionDetail';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      loading: false,
      dialogOpenBlockHash: false,
      blockHash: {},
      transactions :{}
    };
  }
  componentDidMount() {
    const selection = {};
    if (this.props.transaction.length >0) {
      this.props.transaction.forEach(element => {
        selection[element.blocknum] = false;
      });      
    }

    this.setState({selection: selection});
  }
  handleDialogOpen  = async(tid) => {
    await this.props.getTransaction(this.props.currentChannel, tid);
    this.dialog.show({
      title : <FormattedMessage
                id="page.localeProvider.txdetails"
                defaultMessage="Transaction Details"
                description="Transaction Details"
              />,
      body: <TransactionDetail
            transaction={this.props.transactions}
          />,
      bsSize: 'large',
      onHide: (dialog) => {
        dialog.hide()
      }
    })
  }
  reactTableSetup = () => {
    return [
      <Table.Column key = 'txhash' title={<FormattedMessage
        id="page.localeProvider.transactions"
        defaultMessage="Transactions"
        description="Transactions"
        />
        }
        dataIndex="txhash"
        cell= { row =>(
          <span>
            <a
              className="partialHash"
              href="#/blocks"
              onClick={() => this.handleDialogOpen(row)}
            >
              {row}
            </a>{" "}
          </span>
        )}
        width={100}
      />

    ];
  };

  render() {
    return (
      <div>
        <Table
          dataSource={this.props.transaction}
          isLoading={false}
          className="basic-table"
          hasBorder={false}
        >
          {this.reactTableSetup()}
        </Table>
        <Dialog ref={(el) => { this.dialog = el }} />
      </div>
    );
  }
}

export default Transaction;