import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className="dark:bg-covert-400">
      <div className="q-container py-10 flex flex-col-reverse lg:flex-row">
        {(logo || copyright) && (
          <div className="mr-[100px] mb-10 mt-10 lg:mb-0 lg:mt-0">
            {logo && <div>{logo}</div>}
            <small className="text-base font-semibold">{copyright}</small>

            <p className="mt-6">
              Made with <span className="text-primary text-xl">♥</span> by Gasim
              Gasimzada
            </p>
          </div>
        )}
        {links}
      </div>
    </footer>
  );
}
