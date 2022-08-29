import { Outlet } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import { Header } from "../Header"
import { Spinner } from "../Spinner"

const Layout = () => {
  const isLoading = useAppSelector(state => state.books.books.isLoading)

  return (
    <section className="d-flex flex-column">
      <Header />
      {isLoading && <Spinner text="Loading" />}
      <Outlet />
    </section>
  )
}

export { Layout }
