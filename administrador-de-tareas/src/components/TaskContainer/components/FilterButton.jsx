import checkIcon from '../../../assets/icons/controlar.png';

export default function FilterButton({handleFilterChange, buttonClass, filterValue, filter}){
    const convertText = (text) => {
        const firstletter = text.charAt(0);
        const text2 = text.toLowerCase().substring(1, text.length);
        return firstletter+text2;
    }

    const text = convertText(filterValue);

    return (
        <button onClick={() => handleFilterChange(filterValue)} className={buttonClass}>
            {filter === filterValue && <img src={checkIcon} style={{width:15}}/>}
            <span>{text}</span>
        </button>
    );
}