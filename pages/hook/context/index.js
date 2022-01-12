import { useContext } from "react";
import MyContext from '../../../lib/my-context';

function MyCountContext() {

  const context = useContext(MyContext);

  return <span>{context}</span>;
}

export default MyCountContext;