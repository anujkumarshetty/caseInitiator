const config = {
    data: [
        {
            "mappingKey": "1",
            "mappingName": "NBPROCESS1",
            "processTemplateName": "BPM Process",
            "srcDocumentClass": "NewProposals",
            "searchQuery": "@DOCID[=](201)",
            "triggerFieldName": "Trigger",
            "priority": "1",
            "containerCollection": "CollectionName",
            "caseModel": "NBModel",
            "containerFieldMappings": [
                {
                    "documentClassAttribute": "PolicyNumber",
                    "containerField": "KEYVALUE1"
                },
                {
                    "documentClassAttribute": "ApplicationNumber",
                    "containerField": "KEYVALUE2"
                },
                {
                    "documentClassAttribute": "DOCID",
                    "containerField": "DOCID"
                },
                {
                    "documentClassAttribute": "###CM_DOC_ITEMID###",
                    "containerField": "ITEMID"
                }
            ],
            "caseModelFieldMappings": [
                {
                    "containerField": "KEYVALUE1",
                    "caseModelField": "PolicyNumber"
                },
                {
                    "containerField": "KEYVALUE2",
                    "caseModelField": "ApplicationNumber"
                }
            ],
            "containerDefaultValues": [
                {
                    "containerField": "KEYFIELD1",
                    "defaultValue": "PolicyNumber"
                },
                {
                    "containerField": "KEYFIELD2",
                    "defaultValue": "ApplicationNumber"
                }
            ]
        },
        // {
        //     "mappingKey": "1",
        //     "mappingName": "my BPM mappng 1",
        //     "processTemplateName": "BPM Process",
        //     "srcDocumentClass": "DocClass2",
        //     "searchQuery": "@ApplicationNumber[=](AP201805093)",
        //     "triggerFieldName": "trigger22",
        //     "priority": "99",
        //     "containerCollection": "NBContainerCollection",
        //     "caseModel": "NBCaseModel",
        //     "containerFieldMappings": [
        //         {
        //             "documentClassAttribute": "DocAtt11",
        //             "containerField": "ITEMID"
        //         },
        //         {
        //             "documentClassAttribute": "DocAtt11",
        //             "containerField": "ITEMID"
        //         }
        //     ],
        //     "containerDefaultValues": [
        //         {
        //             "containerField": "ITEMID",
        //             "defaultValue": "asdsf"
        //         },
        //         {
        //             "containerField": "ITEMID",
        //             "defaultValue": "@#@$#%^%^"
        //         },
        //     ],
        //     "caseModelFieldMappings": [
        //         {
        //             "containerField": "ITEMID",
        //             "caseModelField": "POLICYNUMBER"
        //         },
        //         {
        //             "containerField": "ITEMID",
        //             "caseModelField": "POLICYNUMBER"
        //         },
        //     ]
        // },
        // {
        //     "mappingKey": "2",
        //     "mappingName": "MappingClaims1",
        //     "processTemplateName": "Claims",
        //     "srcDocumentClass": "DocClass2",
        //     "searchQuery": "@[=](AP201805093)",
        //     "triggerFieldName": "Trigger",
        //     "priority": "100",
        //     "containerCollection": "CollectionName",
        //     "caseModel": "NBModel",
        //     "containerFieldMappings": [
        //         {
        //             "documentClassAttribute": "PolicyNumber",
        //             "containerField": "KEYVALUE1"
        //         },
        //         {
        //             "documentClassAttribute": "ApplicationNumber",
        //             "containerField": "KEYVALUE2"
        //         },
        //         {
        //             "documentClassAttribute": "DOCID",
        //             "containerField": "DOCID"
        //         },
        //         {
        //             "documentClassAttribute": "###CM_DOC_ITEMID###",
        //             "containerField": "ITEMID"
        //         }
        //     ],
        //     "containerDefaultValues": [
        //         {
        //             "containerField": "KEYFIELD1",
        //             "defaultValue": "PolicyNumber"
        //         },
        //         {
        //             "containerField": "KEYFIELD2",
        //             "defaultValue": "ApplicationNumber"
        //         },
        //     ],
        //     "caseModelFieldMappings": [
        //         {
        //             "containerField": "KEYVALUE1",
        //             "caseModelField": "PolicyNumber"
        //         },
        //         {
        //             "containerField": "KEYVALUE2",
        //             "caseModelField": "ApplicationNumber"
        //         },
        //     ]
        // },
    ],
    mappingKey: "",
    mappingName: "",
    processTemplateName1: "",
    processTemplateName2: "",
    srcDocumentClass: "",
    triggerFieldName: "",
    searchQuery: "",
    priority: "",
    containerCollection: "",
    caseModel: "",
    containerFieldMappings: [],
    caseModelFieldMappings: [],
    containerDefaultValues: [],

}

export default config;
