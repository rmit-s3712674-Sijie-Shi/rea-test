import style from "./ItemCard.module.css"
import { useState, useContext } from 'react';
import { Savedinformation } from "../../App";
import { PropertyResult } from "../../types/Property"

interface ItemCardParams {
    price: string;
    propertyImageUrl: string;
    agencyBackgroudColor: string;
    agencyLogo: string;
    id: string;
    buttonType: "Results" | "Saved";
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
    /**
     * Hook to store if the mouse is hovering on the property cards
     */
    const [hover, setHover] = useState(false)

    const setHoverCss = (set: boolean) => {
        setHover(set)
    }

    /**
     * Context to get the saved state in the parent component
     * Function to check if the card is already in the saved list
     */

    const { state } = useContext(Savedinformation)

    let checkAdded = (): boolean => {
        return state.saved.some((res: PropertyResult) => res.id === id)
    }
    return (
        <>
            <div className={style.card} onMouseEnter={() => setHoverCss(true)} onMouseLeave={() => setHoverCss(false)}>
                <div className={style.header} style={{ backgroundColor: agencyBackgroudColor }}>
                    <img src={agencyLogo} alt="agency" />
                </div>
                <img src={propertyImageUrl} className={style.propertyImg} alt="property" />
                <div className={style.card}>
                    <button onClick={() => { if (!checkAdded() || buttonType === "Saved") buttonFunction(id) }} className={buttonType === "Results" ? checkAdded() ? style.exist_botton : style.add_botton : style.remove_button} style={{ visibility: hover ? 'visible' : 'hidden' }}>
                        {buttonType === "Results" ? checkAdded() ? "Property Added" : "Add Property" : "Remove Property"}
                    </button>
                </div>
                <footer className={style.footer}>
                    <div className={style.price}>{price}</div>
                </footer>
            </div>
        </>
    )
}

export default ItemCard