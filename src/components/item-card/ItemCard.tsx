import style from "./ItemCard.module.css"

interface ItemCardParams {
    price: string;
    propertyImageUrl: string;
    agencyBackgroudColor: string;
    agencyLogo: string;
    id: string;
    buttonType: "Results"| "Saved";
    buttonFunction: Function;
}


const ItemCard = ({
    price,
    propertyImageUrl,
    agencyBackgroudColor,
    agencyLogo,
    id,
    buttonType,
    buttonFunction
}: ItemCardParams) => {


    return(
        <>
        {price}
        <img src={propertyImageUrl} alt={id} />
        </>
    )
}

export default ItemCard