import { Component, JSX, splitProps } from 'solid-js';

interface InputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

const Input: Component<InputProps> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  return (
    <input
      class={`block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm ${local.class || ''}`}
      {...rest}
    />
  );
};

export { Input }; 