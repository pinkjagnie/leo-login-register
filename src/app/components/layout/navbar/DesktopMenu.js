import Link from "next/link";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const DesktopMenu = () => {
  const { user, logout } = useAuth();

  const [menuContent, setMenuContent] = useState(false);

  useEffect(() => {
    if (user) {
      setMenuContent(true);
    } else if (!user) {
      setMenuContent(false);
    }
  }, [user]);

  return (
    <div className="flex-none hidden lg:visible lg:block">
      <ul className="menu menu-horizontal px-1 font-medium">
        {menuContent ? (
          <>
            <li>
              <Link href={`/tornadoes/see/${user?.UserIdentificator}`}>
                Tornadoes
              </Link>
            </li>
            <li>
              <Link href="/protected">Protected</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/protected">Protected</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
