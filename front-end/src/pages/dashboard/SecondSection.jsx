import {Card} from "antd";


export default function SecondSection(props){

    return(
        <>
            <Card  style={{ width: "auto", margin: "10px" }} title={props.title} bordered={false}>
                {props.description}
            </Card>
        </>
    )
}