import { withRouter } from 'next/router'

const dynamicParameters =  ({ router }) => (
  <div>
    动态参数 测试页面
    <p>
      参数：{ router.query.id }
    </p>
  </div>
)

export default withRouter(dynamicParameters);
