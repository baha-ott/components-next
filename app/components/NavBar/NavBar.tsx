import Link from "next/link";

function NavBar() {
  const navItems = [
    { path: "", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/works", title: "Works" },
    { path: "contact", title: "Contact us" },
  ].map(({ path, title }) => (
    <li>
      <Link href={path} className="text-lg">
        {title}
      </Link>
    </li>
  ));

  return (
    <nav className="flex justify-between h-32
     items-center px-16">
      <div className="text-3xl font-bold">Tritech</div>
      <ul className="flex items-center gap-16">{navItems}</ul>

      <div className="flex gap-8">
        <button className="text-lg border-2 px-8 py-2 rounded-full border-white">Let's Talk!</button>
        <button className="text-lg">menu</button>
      </div>
    </nav>
  );
}

export default NavBar;
