
interface ContainerProps {
  children: React.ReactNode
}

export const ContainerPage = (props: ContainerProps) => {
  const { children } = props
  return (
    <div className="w-full max-w-6xl px-4 pb-32 mx-auto mt-20 sm:px-6 md:mt-25 md:pb-0 lg:px-8">
      {children}
    </div>
  );
}
