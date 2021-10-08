import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'antd';

function ActiveLink() {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: 'red'
  }
  // Router 模块手动跳转 测试
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/router/router-push')
  }

  // Router 动态传参 路由映射 测试
  const handle2Click = (e) => {
    e.preventDefault()
    // router.push('/router/dynamic-parameters?id=456')
    router.push({
      pathname: '/router/dynamic-parameters',
      query: {
        id: '12345'
      }
    }
    // , 'nihao' // 动态映射测试
    )
  }

  return (
    <div>
      <Button onClick={handleClick} style={style}>
        reterPush 测试
      </Button>
      <Button onClick={handle2Click} style={style}>
        动态传参 测试
      </Button>
      <Link href="/router/dynamic-parameters?id=666" as="/huang/666" >
        <Button style={style}>
          动态映射 测试
        </Button>
      </Link>
    </div>
  )
}

export default ActiveLink