import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Pagination, Progress, Button } from '@icedesign/base';

export default class Test extends Component {
  static displayName = 'Test';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 缓存 table 的请求参数
    this.queryCache = {};
    this.state = {};
  }

  // ICE: React Component 的生命周期

  componentWillMount() {}

  componentDidMount() {
    this.queryCache.page = 1;
    this.fetchData();
  }

  fetchData = () => {

  };

  changePage = (currentPage) => {
    this.queryCache.page = currentPage;

    this.fetchData();
  };

  renderTitle = (value, index, record) => {
    return (
      <div>
        <div style={styles.title}>{record.title}</div>
        <div style={styles.subTitle}>创建时间 {record.createTime}</div>
      </div>
    );
  };

  renderOperations = (value, index, record) => {
    return (
      <div style={styles.operations}>
        <Button
          style={styles.operationButton}
          shape="text"
        >
          编辑
        </Button>
        <Button style={styles.operationButton} shape="text" onClick = {() => {alert(index)}}>
          删除
        </Button>
      </div>
    );
  };

  renderProgress = (value) => {
    return <Progress percent={value} />;
  };

  render() {
    const tableData = {
  "status": "SUCCESS",
  "data": {
    "total": 100,
    "pageSize": 10,
    "currentPage": 1,
    "list": [
      {
        "title": "如何实现前后端通信",
        "createTime": "2017/12/19",
        "progress": 10,
        "priority": "高"
      },
      {
        "title": "ECMAScript 新增了哪些功能",
        "createTime": "2017/12/19",
        "progress": 0,
        "priority": "中"
      },
      {
        "title": "函数的扩展",
        "createTime": "2017/12/19",
        "progress": 100,
        "priority": "低"
      },
      {
        "title": "Set 和 Map 数据结构",
        "createTime": "2017/12/19",
        "progress": 10,
        "priority": "高"
      },
      {
        "title": "Generator 函数的语法",
        "createTime": "2017/12/19",
        "progress": 10,
        "priority": "高"
      },
      {
        "title": "编程风格",
        "createTime": "2017/12/19",
        "progress": 10,
        "priority": "高"
      },
      {
        "title": "dule 的加载实现",
        "createTime": "2017/12/19",
        "progress": 50,
        "priority": "中"
      },
      {
        "title": "调用优化",
        "createTime": "2017/12/19",
        "progress": 10,
        "priority": "高"
      },
      {
        "title": "Promise 对象",
        "createTime": "2017/12/19",
        "progress": 70,
        "priority": "低"
      }
    ]
  }
}

    return (
      <div className="complex-progress-table">
        <IceContainer style={styles.tableCard}>
          <Table
            dataSource={tableData.data.list}
            isLoading={
              tableData.__loading
            } /* eslint no-underscore-dangle: "off" */
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="问题描述"
              cell={this.renderTitle}
              width={320}
            />
            <Table.Column
              title="完成进度"
              dataIndex="progress"
              width={230}
              cell={this.renderProgress}
            />
            <Table.Column
              title="优先级"
              dataIndex="priority"
              width={60}
              style={styles.priority}
            />
            <Table.Column
              title="操作"
              width={100}
              cell={this.renderOperations}
            />
          </Table>
         
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  tableCard: {
    padding: '10px',
  },
  subTitle: {
    marginTop: '4px',
    fontSize: '12px',
    color: '#999999',
  },
  operationButton: {
    marginRight: '10px',
  },
  priority: {
    width: '70px',
    textAlign: 'center',
  },
  operations: {
    lineHeight: '28px',
  },
  pagination: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};