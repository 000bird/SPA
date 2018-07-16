
import { connect } from 'dva';
import {  Popconfirm, Button ,Form, Icon, Input,} from 'antd';
import { routerRedux } from 'dva/router';
//import styles from './login';
//import { PAGE_SIZE } from '../constants';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';


const FormItem = Form.Item;


function Login({ dispatch, list: dataSource, loading, total, page: current , form:{
  getFieldDecorator,
  validateFieldsAndScroll,
}}) {
  function handleSubmit(values) {
   dispatch({ 
     type: 'login',
     payload: values 
    });
  }
  return (
    <Form onSubmit=    {handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
      </FormItem>
      <FormItem>

        <Button type="primary" htmlType="submit" className="login-form-button">
          登陆
        </Button>
    
      </FormItem>
    </Form>
  );
  //<div onClick={handleClick}>${props.name}</div>
}

//Form.create()({login});
function mapStateToProps(state) {
  const { form} = state.Login;
   return {
    form,
    loading: state.loading.models.LoginForm,
  };
}

export default connect(mapStateToProps)((Form.create()(Login)));


/*
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
  
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
      
        </FormItem>
      </Form>
    );
  }
}


*/
//const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

//ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));


