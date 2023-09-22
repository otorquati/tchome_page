import { Link } from 'react-router-dom';
import { Container } from "../Container/Container";
import  styles  from './Navbar.module.css';

export function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/ferramentas">Ferramentas</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/tutorials">Tutoriais</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                </li>
                </ul>
            </Container>
        </nav>
    )
}