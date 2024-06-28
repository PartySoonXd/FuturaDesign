import React from "react";
import { Datagrid, List, TextField, useGetList } from "react-admin";

export const FeedbackList = () => {
    const {data} = useGetList('feedback')
    return (
        <List>
            <Datagrid data={data}>
                <TextField source="name"/>
                <TextField source="phone"/>
                <TextField source="email"/>
                <TextField source="message"/>
            </Datagrid>
        </List>
    )
}