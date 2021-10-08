import { withRouter } from 'next/router'

const DynamicParameters =  ({ router }) => {
  return (
  <div>
    动态参数 测试页面
    <p>
      {/* 参数：{ JSON.stringify(router.query) } */}
      参数：{ router.query.id }
    </p>
  </div>
)}

// 使用 getInitialProps 保证后端映射 query 数据同步(不然会丢失)
DynamicParameters.getInitialProps = async (res) => {
  const id = res.query.id
  return { id }
};

export default withRouter(DynamicParameters);
