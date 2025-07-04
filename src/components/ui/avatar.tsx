import { Component, JSX, splitProps } from 'solid-js';

interface AvatarProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Avatar: Component<AvatarProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <div class={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${local.class || ''}`} {...rest}>
      {local.children}
    </div>
  );
};

interface AvatarImageProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage: Component<AvatarImageProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'src', 'alt']);
  
  return (
    <img 
      class={`aspect-square h-full w-full ${local.class || ''}`}
      src={local.src}
      alt={local.alt}
      {...rest}
    />
  );
};

interface AvatarFallbackProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback: Component<AvatarFallbackProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <div class={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${local.class || ''}`} {...rest}>
      {local.children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback }; 