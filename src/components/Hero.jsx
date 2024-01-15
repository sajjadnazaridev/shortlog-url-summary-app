import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="لوگو شورت لاگ" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/sajjadnazaridev", "_blank");
          }}
          className="black_btn"
        >
          گیت هاب
        </button>
      </nav>

      <h1 className="head_text">
        خلاصه مقالات با <br className="max-md:hidden" />
        <span className="orange_gradient">شورت لاگ</span>
      </h1>
      <h2 className="desc">
      خواندن خود را با شورت لاگ ساده کنید، یک خلاصه‌کننده مقاله منبع باز که مقالات طولانی را به خلاصه‌های واضح و مختصر تبدیل می‌کند.
      </h2>
    </header>
  );
};

export default Hero;
