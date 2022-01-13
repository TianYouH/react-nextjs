import Link from "next/link";
import { Button } from "antd";

function Layout({ children }) {
  return (
    <header>
      layout层
      <Link href="/router">
        <Button>前往 Router 测试</Button>
      </Link>
      <Link href="/hook">
        <Button>前往 Hook 测试</Button>
      </Link>
      <Link href="/redux">
        <Button>前往 Redux 测试</Button>
      </Link>
      { children }
    </header>
  );
}

export default Layout;
