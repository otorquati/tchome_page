import styles from './Container.module.css'

type ContainerProps = {
    customClass: String,
    children: String
}

export function Container(props: ContainerProps){
    return(
       <div className={`${styles.container} ${props.customClass}`}>{props.children}</div>

    )
}
