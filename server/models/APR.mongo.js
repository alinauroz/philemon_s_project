const mongoose = require("mongoose");

const APRSchema = {
    "APR_REQ_NUM":{
       "type":"string",
       "unique": true
    },
    "FY_APR":{
       "type":"string"
    },
    "APR_OBJECT_ID":{
       "type":"string"
    },
    "APR_CREATE_DT":{
       "type":"string"
    },
    "APR_CREATE_DATE":{
       "type":"string"
    },
    "APR_RELEASED_TO_ROUTING":{
       "type":"string"
    },
    "REQ_OBJ_ID":{
       "type":"string"
    },
    "REQ_CREATE_DT":{
       "type":"string"
    },
    "REQ_CREATE_DATE":{
       "type":"string"
    },
    "REQ_RELEASED_TO_ROUTE":{
       "type":"string"
    },
    "INCOMING_MIPR":{
       "type":"string"
    },
    "SCRM_ASRS_ATTACHED":{
       "type":"string"
    },
    "REQUISITIONER":{
       "type":"string"
    },
    "REQUISITIONER_EMAIL":{
       "type":"string"
    },
    "OFFICE":{
       "type":"string"
    },
    "PHONE":{
       "type":"string"
    },
    "REQUIRED_DELIVERY":{
       "type":"string"
    },
    "ACQUISITION_METHOD":{
       "type":"string"
    },
    "REC_AWARD_ACTION_TYPE":{
       "type":"string"
    },
    "PURPOSE_REQ":{
       "type":"string"
    },
    "TYPE_OF_IT_ACQUISITION":{
       "type":"string"
    },
    "REQ_INCLUDE_ICS":{
       "type":"string"
    },
    "CLEARED_CONTRACTOR":{
       "type":"string"
    },
    "PRODUCT_DESC":{
       "type":"string"
    },
    "SOLE_SOURCE":{
       "type":"string"
    },
    "VENDOR_1":{
       "type":"string"
    },
    "VEDOR_2":{
       "type":"string"
    },
    "VENDOR_3":{
       "type":"string"
    },
    "SUGGESTED_VENDOR":{
       "type":"string"
    },
    "AUTH_AMT":{
       "type":"string"
    },
    "SYSTEM":{
       "type":"string"
    },
    "PROD_CAT":{
       "type":"string"
    },
    "SERV_CAT":{
       "type":"string"
    },
    "HOW":{
       "type":"string"
    },
    "WHERE":{
       "type":"string"
    },
    "FILE1_NAME":{
       "type":"string"
    },
    "FILE1_LINK":{
       "type":"string"
    },
    "FILE2_NAME":{
       "type":"string"
    },
    "FILE2_LINK":{
       "type":"string"
    },
    "FILE3_NAME":{
       "type":"string"
    },
    "FILE3_LINK":{
       "type":"string"
    },
    "DOCUMENT_CLASSIFICATION":{
       "type":"string"
    },
    "CAVEAT":{
       "type":"string"
    },
    "TERMS":{
       "type":"string"
    },
    "DECLASSIFY_EVENT":{
       "type":"string"
    },
    "DECLASSIFY_DATE":{
       "type":"string"
    },
    "DECLASSIFY_CODE":{
       "type":"string"
    },
    "DECLASSIFIED_BY":{
       "type":"string"
    },
    "SECURITY_METHOD":{
       "type":"string"
    },
    "FIRST_IT_APPROVAL":{
       "type":"string"
    },
    "MULTIPLE_REVIEW":{
       "type":"string"
    },
    "CONTRACT_PIN":{
       "type":"string"
    },
    "MOD_NUM":{
       "type":"string"
    },
    "OBLIG_DATE":{
       "type":"string"
    },
    "ISSUE_DATE":{
       "type":"string"
    },
    "AWARD_VENDOR":{
       "type":"string"
    },
    "LINE_TOT":{
       "type":"string"
    },
    "COMMIT_AMT":{
       "type":"string"
    },
    "OBLIGATED":{
       "type":"string"
    },
    "assigned-to" : {
       "type": "string"
    }
}

module.exports = mongoose.model('APR', APRSchema);