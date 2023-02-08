import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { login } from '@/services/login/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormText,
} from '@ant-design/pro-components';
import { Alert, message } from 'antd';
import { history, useModel } from '@umijs/max';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [ userLoginState, setUserLoginState ] = useState<API.LoginResult>({});
  const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    
    try {
      // 登录
      const msg = await login({ ...values });
      if (msg.status === "ok") {
        localStorage.setItem('token', msg.token? msg.token:'');
        message.success('登录成功！');
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      message.error("登录失败！请重试")
    }
  };

  const { status } = userLoginState;

  return (
    <div style={{ backgroundColor: 'white', width:'100%', height: '100%'}}>
      <LoginFormPage
        backgroundImageUrl="/login-landscape.svg"
        logo="/logo.png"
        title="Alligator"
        subTitle="kubernetes多集群管理平台"
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams);
        }}
      >
        {status === "error" && (
            <LoginMessage
              content={'账户或密码错误'}
            />
        )}
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'用户名: admin or user'}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginFormPage>
    </div>
  );
};

export default Login;