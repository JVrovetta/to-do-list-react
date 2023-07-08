import style from './styles.module.scss'

function Input({ value, onChange, type, placeholder, required = false }) {
  return (
    <input
      className={style.wrapper}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
export default Input