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

  // Router 动态传参 测试
  const handle2Click = (e) => {
    e.preventDefault()
    // router.push('/router/dynamic-parameters?id=456')
    router.push({
      pathname: '/router/dynamic-parameters',
      query: {
        id: '12345'
      }
    })
  }

  return (
    <div>
      <Button onClick={handleClick} style={style}>
        reterPush 测试
      </Button>
      <Button onClick={handle2Click} style={style}>
        动态传参 测试
      </Button>
    </div>
  )
}

export default ActiveLink