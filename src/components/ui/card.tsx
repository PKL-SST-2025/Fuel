import { Component, JSX, splitProps } from 'solid-js';

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Card: Component<CardProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <div class={`bg-white rounded-lg border border-gray-200 shadow-sm ${local.class || ''}`} {...rest}>
      {local.children}
    </div>
  );
};

interface CardHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const CardHeader: Component<CardHeaderProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <div class={`px-6 py-4 border-b border-gray-200 ${local.class || ''}`} {...rest}>
      {local.children}
    </div>
  );
};

interface CardTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle: Component<CardTitleProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <h3 class={`font-semibold text-gray-900 ${local.class || ''}`} {...rest}>
      {local.children}
    </h3>
  );
};

interface CardContentProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const CardContent: Component<CardContentProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);
  
  return (
    <div class={`px-6 py-4 ${local.class || ''}`} {...rest}>
      {local.children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent }; 