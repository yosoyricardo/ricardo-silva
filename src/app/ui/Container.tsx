type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, ...props }: ContainerProps) {
    return <div className={`container w-full ${props.className ? props.className : ''}`}>
        {children}
    </div>
}