import Link from 'next/link'
import { Button } from 'antd';

export default () => (
  <div>
    <Link href="/hook/state" >
      <Button>State Hook 及 Effect Hook</Button>
    </Link>
    <Link href="/hook/reducer" >
      <Button>Reducer Hook</Button>
    </Link>
    <Link href="/hook/effect-ref" >
      <Button>Effect Hook 及 Ref Hook </Button>
    </Link>
    <Link href="/hook/context" >
      <Button>Context Hook</Button>
    </Link>
    <Link href="/hook/memo" >
      <Button>Memo Hook</Button>
    </Link>
  </div>
);
