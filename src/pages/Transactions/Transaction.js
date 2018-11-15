import React, {Component} from "react";



import find from "lodash/find";
import {FormattedMessage} from 'react-intl';
import Dialog from 'react-bootstrap-dialog'
import {Table} from '@icedesign/base';
import './main.css'

class Transaction extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      dialogOpen: false,
      loading: false,
      dialogOpenBlockHash: false,
      blockHash: {},
      transactions :{}
    };
  }

  handleDialogOpen = async tid => {
    await this.props.getTransaction(this.props.currentChannel, tid);
    this.setState({dialogOpen: true});
  };

  handleClose = () => {
    this.props.onClose();
  };
  handleDialogOpenTransactions = transactions =>{
    const data = transactions;
    this.setState({dialogOpen: true,transactions : transactions});
  }

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  handleDialogOpenBlockHash = blockHash => {
    const data = find(this.props.blockList, item => {
      return item.blockhash === blockHash;
    });

    this.setState({
      dialogOpenBlockHash: true,
      blockHash: data
    });
  };


  handleDialogCloseBlockHash = () => {
    this.setState({dialogOpenBlockHash: false});
  };

  handleEye = (row, val) => {
    const data = Object.assign({}, this.state.selection, {[row.index]: !val});
    this.setState({selection: data});
  };

  componentDidMount() {
    const selection = {};
    if (this.props.transaction.length >0) {
      this.props.transaction.forEach(element => {
        selection[element.blocknum] = false;
      });      
    }

    this.setState({selection: selection});
  }

  reactTableSetup = () => {
    return [
      <Table.Column  title={<FormattedMessage
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
            >
              <div className="fullHash" id="showTransactionId">
                {row.value}
              </div>{" "}
              {row.value}
            </a>{" "}
          </span>
        )}
        width={100}
      />

    ];
  };

  render() {
    const  columnHeaders = [
      <Table.Column  title={<FormattedMessage
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
            >
              <div className="fullHash" id="showTransactionId">
                {row.value}
              </div>{" "}
              {row.value}
            </a>{" "}
          </span>
        )}
        width={100}
      />
    ]
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
      </div>
    );
  }
}

export default Transaction;