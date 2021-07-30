import Link from "next/link";

const Header = () => {
  let dark = null;
  const enableDarkmood = () => {
    document.body.classList.add("darkBg");
    localStorage.setItem("darkBg", "enable");
  };
  const disableDarkmood = () => {
    document.body.classList.remove("darkBg");
    localStorage.setItem("darkBg", null);
  };
  if (dark === "enable") {
    enableDarkmood();
  }
  const handleClick = () => {
    dark = localStorage.getItem("darkBg");
    if (dark !== "enable") {
      enableDarkmood();
    } else {
      disableDarkmood();
    }
  };
  return (
    <div className="header">
      <Link href="/">
        <a>Shop</a>
      </Link>
      <input type="checkbox" onClick={handleClick} />
    </div>
  );
};

export default Header;
