import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Faultthing.css';
import { PAGE_SIZE } from '../constants';
import FaultthingModal from './FaultthingModal';
import zhCN from 'antd/lib/locale-provider/zh_CN';

function faultthing({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'faultthing/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/faultthing',
      query: { page },
    }));
  }


  function editHandler(id, values) {
    dispatch({
      type: 'faultthing/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'faultthing/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      render: text => <a href="">{text}</a>,
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '用户',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '故障设备名称',
      dataIndex: 'machinename',
      key: 'machinename',
    },
    {
      title: '故障类别',
      dataIndex: 'classify',
      key: 'classify',
    },
    {
      title: '故障描述',
      dataIndex: 'fault',
      key: 'fault',
    },
    {
      title: '处理方法',
      dataIndex: 'dealwith',
      key: 'dealwith',
    },
    /*
    {
      title: '是否完成',
      dataIndex: 'isend',
      key: 'isend',
    },
    */
    {
      title: '备注',
      dataIndex: 'et',
      key: 'et',
    },

    {
      title: '事件管理',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <FaultthingModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>编辑</a>
          </FaultthingModal>
          <Popconfirm title="确认删除?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <FaultthingModal record={{}} onOk={createHandler}>
            <Button type="primary">创建故障事件</Button>
          </FaultthingModal>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={true}
        />
      
        
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.faultthing;
  return {
    list,
    total,
    page,
    loading: state.loading.models.faultthing,
  };
}

export default connect(mapStateToProps)(faultthing);
