import Image from "next/image";

export function OmnifoodHeader() {
  return (
    <header className="bg-[fdf2e9]">
      <Image
        src="/udemy/omnifood/omnifood-logo.png"
        alt="Logo for Omnifood"
        width={130}
        height={18}
      />
    </header>
  );
}
