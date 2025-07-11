import { splitProps } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

const Checkbox = (props: {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  class?: string;
}) => {
  const [local, rest] = splitProps(props, ['id', 'checked', 'onCheckedChange', 'class']);

  const handleChange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    local.onCheckedChange(target.checked);
  };

  return (
    <input
      type="checkbox"
      id={local.id}
      checked={local.checked}
      onInput={handleChange}
      class={`h-5 w-5 rounded border border-white/50 bg-transparent data-[state=checked]:bg-white data-[state=checked]:text-blue-600 ${local.class || ''}`}
      {...(rest as JSX.HTMLAttributes<HTMLInputElement>)}
    />
  );
};

export default Checkbox;
