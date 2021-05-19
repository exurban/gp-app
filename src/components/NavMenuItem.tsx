import ActiveLink from './ActiveLink';

type Props = {
  link: string;
  name: string;
};

const NavMenuItem = ({ link, name }: Props): JSX.Element => {
  return (
    <li
      className="my-auto p-1 lg:p-2 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extralight font-heading text-coolGray-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500"
      aria-label={`${name}`}
    >
      <ActiveLink
        activeClassName="text-indigo-600 dark:text-indigo-500"
        href={link}
      >
        <a>
          <p className="mx-2 ">{name}</p>
        </a>
      </ActiveLink>
    </li>
  );
};

export default NavMenuItem;
