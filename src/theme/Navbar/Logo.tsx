import React from "react";
import Logo from "@theme/Logo";

export default function NavbarLogo(): JSX.Element {
  return (
    <Logo
      className="text-covert-100 dark:text-white hover:no-underline"
      titleClassName="mr-10 hover:text-primary font-black text-xl"
    />
  );
}
