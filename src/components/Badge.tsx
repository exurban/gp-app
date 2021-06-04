type Props = {
  text: number;
};

export const BadgePrimary: React.FC<Props> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full mx-1 text-xs font-medium bg-indigo-700 hover:bg-indigo-500 text-indigo-50 hover:text-white absolute top-0 right-0">
      {text}
    </span>
  );
};

export const BadgeSecondary: React.FC<Props> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full mx-1 text-xs font-medium bg-purple-800 hover:bg-purple-600 text-purple-200 hover:text-white">
      {text}
    </span>
  );
};
