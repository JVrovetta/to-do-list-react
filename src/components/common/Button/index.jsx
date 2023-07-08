import style from './styles.module.scss'

function Button({ onClick, children, role = "default", type }) {
  return (
    <button
      className={`${style.wrapper} ${style[role]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
export default Button