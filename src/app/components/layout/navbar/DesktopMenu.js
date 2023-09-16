import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

const DesktopMenu = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex-none hidden lg:visible lg:block">
      <ul className="menu menu-horizontal px-1 font-medium">
        {!user && (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        {!user && (
          <li>
            <Link href="/register">Register</Link>
          </li>
        )}
        <li>
          <Link href="/protected">Protected</Link>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
