const mongoose = require("mongoose");

const APRSchema = {
    APR_REQ_NUM: {
        type: String,
        require: true
    },
    FY_APR: {
        type: String,
        require: true
    },
    APR_Object_ID: {
        type: String,
        required: true
    },
    APR_Create_DT: {
        type: String,
        required: true
    },
    APR_Create_Date: {
        type: String,
        required: true
    },
    APR_Released_To_Routing: {
        type: String,
        required: true
    },
    Req_OBJ_ID: {
        type: String,
        required: true
    },
    REQ_Create_DT: {
        type: String,
        required: true
    },
    REQ_Create_Date: {
        type: String,
        required: true
    },
    REQ_Released_To_Route: {
        type: String,
        required: true
    }
}