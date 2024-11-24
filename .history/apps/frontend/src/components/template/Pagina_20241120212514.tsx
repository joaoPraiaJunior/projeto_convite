export interface PaginaProps {
    children?: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
  return (

    <div className="flex flex-col items-center py-10 min-h-screen bg-red-900">
        <main className={props.className}>
            {props.children}
        </main>
    </div>

  )
    
}