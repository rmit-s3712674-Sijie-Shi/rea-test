import style from "./ItemList.module.css"
import { PropertyResult } from "../../types/Property"
import ItemCard from "../item-card/ItemCard";

interface ItemListParams {
    result: PropertyResult[];
    buttonType: "Results"| "Saved";
    buttonFunction: Function
}

const ItemList = ({
    result,
    buttonType,
    buttonFunction
}: ItemListParams) => {

    return(
        <>
        <div className={style.title}>{buttonType ==="Results" ? "Property Results" : "Porperties Saved"}</div>
        <div className={style.itemlist}>
            {result?.length ?
               (result.map((res) => 
                   (<ItemCard price={res.price} propertyImageUrl={res.mainImage} agencyBackgroudColor={res.agency.brandingColors.primary} agencyLogo={res.agency.logo} id={res.id} buttonType={buttonType} buttonFunction={buttonFunction}/>)
                )) : (<div>empty result</div>)
           }
        </div>
        </>
    )
}

export default ItemList

/**
 *     price: string;
    propertyImageUrl: string;
    agencyBackgroudColor: string;
    agencyLogo: string;
    id: string;
    buttonType: "Results"| "Saved";
    buttonFunction: Function;
 */