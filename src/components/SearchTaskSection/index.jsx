import { useContext } from "react"
import style from "./styles.module.scss"
import SearchContext from "../../contexts/SearchContext"
import Input from "../common/Input"

function SearchTaskSection({ id }) {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <section id={id} className={style.wrapper}>
      <h2>Pesquisar:</h2>
      <Input
        type="text"
        placeholder="Digite para pesquisar..."
        value={search}
        onChange={(ev) => setSearch(ev.currentTarget.value)}
      />
    </section>
  )
}

export default SearchTaskSection