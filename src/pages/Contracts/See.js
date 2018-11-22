import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Grid, Row, Col } from 'react-bootstrap';
import 'codemirror/lib/codemirror.css';

require('codemirror/mode/javascript/javascript');



export default class See extends Component {
  static displayName = 'See';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (editor, data, value) => {
    this.setState({
      value,
    });
  };

  renderCodeMirror = () => {
    const options = {
      mode: 'javascript',
      lineNumbers: true,
      tabSize: '2',
    };

    return (
      <CodeMirror
        value={this.props.watchContract}
        options={options}
        onChange={this.onChange}
      />
    );
  };

  close = () =>{
    this.props.close()
  }
  render() {
    return (
      <IceContainer>
        <Row wrap>
          <Col l="24" xxs="24">
            {this.renderCodeMirror()}
          </Col>
        </Row>
        <Row>
          <button onClick = {() => this.close()}> 取消</button>
        </Row>
      </IceContainer>
    );
  }
}