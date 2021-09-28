import Link from 'next/link'
import { Button } from 'antd';

export default () => (
  <div>
    <Link href="/router" >
      <Button>前往 router 测试</Button>
    </Link>
  </div>
)
