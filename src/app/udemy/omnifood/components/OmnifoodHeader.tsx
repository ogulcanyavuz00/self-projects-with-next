import Image from "next/image";

export function OmnifoodHeader() {
  return (
    <header className="px-6 bg-omnifood-lightOrange ">
      <Image
        src="/udemy/omnifood/omnifood-logo.png"
        alt="Logo for Omnifood"
        width={130}
        height={18}
      />
    </header>
  );
}
