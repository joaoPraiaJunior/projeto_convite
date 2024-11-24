export interface PaginaProps {
    children?: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
  return (

    <div className={``}>
        <main>
            {props.children}
        </main>
    </div>

  )
    
}