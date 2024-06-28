import axios from "axios"

export const dataProvider = {
    getList:   async (resource, params) => {
        const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/${resource}/get`)      
        return {data: data.data, total: data.data.length}
    },
    // get a single record by id
    getOne:     (resource, params) => Promise, 
    // get a list of records based on an array of ids
    getMany:    (resource, params) => Promise, 
    // get the records referenced to another record, e.g. comments for a post
    getManyReference: (resource, params) => Promise, 
    // create a record
    create:     (resource, params) => Promise, 
    // update a record based on a patch
    update:     (resource, params) => Promise, 
    // update a list of records based on an array of ids and a common patch
    updateMany: (resource, params) => Promise, 
    // delete a record by id
    delete:     (resource, params) => Promise, 
    // delete a list of records based on an array of ids
    deleteMany: (resource, params) => Promise, 
}