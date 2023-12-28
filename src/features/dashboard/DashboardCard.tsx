import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import * as React from "react";
import {Link as RouterLink} from "react-router-dom";
import {ILink} from "./types/Link";

type Props = {
    content: string
    value: string
    links?: ILink[],
    id: string
}

const DashboardCard: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <Card style={{border: 'solid 1px', marginRight: '16px', borderColor: '#1F4F59'}}
              sx={{minWidth: 200, maxWidth: 345, boxShadow: 'none', borderRadius: 2}}>
            <CardContent>
                <Typography>
                    {props.value} {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                {props.links && props.links.map((link: ILink, index: number) => {
                    return (
                        <Button key={index} id={props.id + `-btn-` + index} size="small" variant="text"
                                component={RouterLink} to={link.href}>{link.name}</Button>
                    )
                })}
            </CardActions>
        </Card>
    );
}

export default DashboardCard;