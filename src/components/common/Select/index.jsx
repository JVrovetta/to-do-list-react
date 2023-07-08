import style from './styles.module.scss'

function Select({ children, value, onChange, required = false }) {
  return (
    <select
      className={style.wrapper}
      value={value}
      onChange={onChange}
      required={required}
    >
      {children}
    </select>
  )
}
export default Select