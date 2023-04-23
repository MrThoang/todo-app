import clsx from 'clsx';

export const Button = ({
  classNames,
  title,
  htmlType,
  disabled,
  onClick,
  isActive
}) => {
  return (
    <button
      className={clsx(`${classNames}
      font-700 text-lg rounded-lg py-1.5 hover:border-border-color hover:border
      leading-4 w-auto px-2 border 
      ${isActive ? 'border-border-color' : 'border-transparent'}`)}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      <div className='text-gray-500'
      >
        {title}
      </div>
    </button>
  );
};
