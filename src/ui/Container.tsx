type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, ...props }: ContainerProps) {
    return <div className={`Container w-full p-4 ${props.className ? props.className : ''}`}>
        {children}
    </div>
}