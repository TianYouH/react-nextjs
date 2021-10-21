import Link from "next/link";
import { Button } from "antd";

function Layout({ children }) {
  return (
    <header>
      <Link href="/router">
        <Button>前往 router 测试</Button>
      </Link>
      { children }
    </header>
  );
}

export default Layout;
