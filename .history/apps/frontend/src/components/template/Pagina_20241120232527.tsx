import Logo from "./Logo"

export interface PaginaProps {
    children?: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
  return (

    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
        <Logo />
        <main className={`flex flex-1 flex-col justify-center py-10 container bg-red-500 ${props.className}`}>
            {props.children}
        </main>
    </div>

  )
}