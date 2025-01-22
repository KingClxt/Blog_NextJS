import Link from "next/link"
import { Button } from "./ui/button"


interface ItemProps {
    item:string
    link:string,
    isLogin?:boolean
}

const Item = (props: ItemProps)=>{
    return (
        <Button variant={!props.isLogin?`ghost`:'default'} asChild>
            <Link href={props.link} >
                {props.item}
            </Link>
        </Button>
    )
}

export default Item