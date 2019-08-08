import React from 'react';
import { Button} from 'antd';

class ChangeSchool extends React.Component {
    constructor() {
        super();
        this.state={};
      }

//   渲染页面后，自动运行
  componentDidMount() {

  }
  render() {
    return (
        <Button style={{marginLeft:'50px',marginTop:'50px'}} type="primary">
          起始页
        </Button>
    );
  }
}

export default ChangeSchool;
