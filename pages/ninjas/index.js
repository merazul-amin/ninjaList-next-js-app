import Link from "next/link";
import styles from '@/styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            users: data
        }
    }
}


const NinjaHome = ({ users }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {users?.length}
            {users?.map(user => <Link href={'/'} className={styles.single}>{user.name}</Link>)}
        </div>
    );
};

export default NinjaHome;