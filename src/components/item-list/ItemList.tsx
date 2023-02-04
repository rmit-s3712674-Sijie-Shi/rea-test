import style from "./ItemList.module.css"

interface ItemListParams {
    result: string;
}

const ItemList = ({
    result
}: ItemListParams) => {

    return(
        <>
        {result}
        </>
    )
}

export default ItemList