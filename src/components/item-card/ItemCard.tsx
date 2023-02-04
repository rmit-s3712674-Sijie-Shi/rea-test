import style from "./ItemCard.module.css"

interface ItemCardParams {
    price: string;
    propertyImageUrl: string;
}


const ItemCard = ({
    price,
    propertyImageUrl
}: ItemCardParams) => {


    return(
        <>
        {{price}}
        {{propertyImageUrl}}
        </>
    )
}

export default ItemCard