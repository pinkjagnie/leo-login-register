import Link from "next/link";

const Drawer = ({ openDrawer, toggleDrawer }) => {
  return (
    <div
      className={
        openDrawer
          ? "fixed top-0 left-0 w-full md:w-[50%] lg:w-[30%] flex flex-col justify-center items-center h-screen bg-base-200 text-center ease-in duration-200 z-40"
          : "fixed top-0 left-[-100%] ease-in"
      }
    >
      <div className="w-[100%]">
        <ul className="menu p-4 w-[100%] min-h-full bg-base-200 text-base-content font-medium px-6">
          <li>
            <Link href="/" onClick={() => toggleDrawer(openDrawer)}>
              Some Item 1
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => toggleDrawer(openDrawer)}>
              Some Item 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
