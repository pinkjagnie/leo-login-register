import Link from "next/link";

import useLogout from "@/hooks/useLogout";
import useLogged from "@/hooks/useLogged";

const DesktopMenu = () => {
  const logout = useLogout();
  const { isLogged } = useLogged();

  return (
    <div className="flex-none hidden lg:visible lg:block">
      <ul className="menu menu-horizontal px-1 font-medium">
        {!isLogged && (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        {!isLogged && (
          <li>
            <Link href="/register">Register</Link>
          </li>
        )}
        <li>
          <Link href="/protected">Protected</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
