import HeaderBtn from "./HeaderBtn";

export default function Header() {
  return (
    <div className="w-full flex justify-start items-center bg-gray-100 px-52 py-6 gap-40">
      <h1 className="text-2xl font-bold text-gray-500">LOGO</h1>
      <div className="flex justify-center items-center gap-12">
        <HeaderBtn text="Company" />
        <HeaderBtn text="Services" />
        <HeaderBtn text="FinTech Solutions" />
        <HeaderBtn text="Profucts" />
        <HeaderBtn text="Portfoilo" />
        <HeaderBtn text="Contact Us" />
      </div>
    </div>
  );
}
