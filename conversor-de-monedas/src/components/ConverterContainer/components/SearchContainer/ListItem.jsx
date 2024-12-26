import styles from './ListItem.module.css';

function ListItem({value, handleSearchInput}){
    return(
        <li onClick={() => handleSearchInput(value)} className={styles.liItem}>{value}</li>
    );
}

export default ListItem;