import Link from "next/link";

import useLogout from "@/hooks/useLogout";
import { useAuth } from "@/context/AuthContext";

const DesktopMenu = () => {
  const logout = useLogout();
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex-none hidden lg:visible lg:block">
      <ul className="menu menu-horizontal px-1 font-medium">
        {!isLoggedIn && (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link href="/register">Register</Link>
          </li>
        )}
        <li>
          <Link href="/protected">Protected</Link>
        </li>
        {isLoggedIn && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
