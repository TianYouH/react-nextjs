import { useRouter } from 'next/router'
import { Button } from 'antd';

function ActiveLink() {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: 'red'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/router/router-push')
  }

  return (
    <Button onClick={handleClick} style={style}>
      reterPush 测试
    </Button>
  )
}

export default ActiveLink