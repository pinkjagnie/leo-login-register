import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="flex-none hidden lg:visible lg:block">
      <ul className="menu menu-horizontal px-1 font-medium">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/protected">Protected</Link>
        </li>
        <li>
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
