import { Component } from 'react';
import { Modal, Form, Input,DatePicker} from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';

class FaultthingEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { date,department, machinename,user, classify,fault,dealwith,et } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="故障事件描述"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="日期"
            >
              {
                getFieldDecorator('date', {
                  initialValue: moment(date, dateFormat),
                })(<DatePicker 
                   //initialValue={moment('date', dateFormat)  } 
                     />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="部门"
            >
              {
                getFieldDecorator('department', {
                  initialValue: department,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户"
            >
              {
                getFieldDecorator('user', {
                  initialValue: user,
                })(<Input />)
              }
            
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="设备名"
            >
              {
                getFieldDecorator('machinename', {
                  initialValue: machinename,
                })(<Input />)
              }
              
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="故障类别"
            >
              {
                getFieldDecorator('classify', {
                  initialValue: classify,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="故障描述"
            >
              {
                getFieldDecorator('fault', {
                  initialValue: fault,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="处理方法"
            >
              {
                getFieldDecorator('dealwith', {
                  initialValue: dealwith,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="备注"
            >
              {
                getFieldDecorator('et', {
                  initialValue: et,
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(FaultthingEditModal);
