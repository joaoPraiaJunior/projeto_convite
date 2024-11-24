export interface PaginaProps {
    children?: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
  return (

    <div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <main className={props.className}>
            {props.children}
        </main>
    </div>

  )
    
}