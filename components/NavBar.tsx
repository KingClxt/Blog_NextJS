import Item from "./Item";

const ITEMS = ["Acceuil", "Blogs"];

const NavBar = () => {
  return (
    <nav className="z-20 fixed top-0 right-0 left-0 flex justify-between items-center p-4 bg-white shadow">
      <h1 className="font-bold text-xl">CLXT_BLOG</h1>
      <ul className="flex gap-1">
        {ITEMS.map((item) => (
          <Item isLogin={item == 'Blogs'} item={item} link="/" key={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
