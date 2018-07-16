import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Spin } from 'antd'
import LoginForm from './LoginForm'
import styles from './LoginForm.less'

function Login ({ dispatch, loading = false }) {
  const loginProps = {
    loading,
    onOk (data) {
      dispatch({ type: 'login/submit', payload: data })
    },
  }
  return (
    <LoginForm {...loginProps} />
  )
}

Login.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

function mapStateToProps ({ loading }) {
  return { 
      
    loading: loading.models.login }
}

export default connect(mapStateToProps)(Login)
