import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import Redirect from 'umi/redirect';


function Header({ location }) {
  let islogin=sessionStorage.islogin;
	if(!islogin){return(<label/>);}else
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/faultthing">
        <Link to="/faultthing"><Icon type="bars" />faultthing</Link>
      </Menu.Item>
      <Menu.Item key="/departname">
        <Link to="/departname"><Icon type="bars" />departname</Link>
      </Menu.Item>
      <Menu.Item key="/dva">
        <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
