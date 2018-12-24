import { combineReducers } from "redux";

import ProcessListItems from "./reducer-process-name-list";
import UpdateProcessName from './reducer-update-process-name';
import SaveToData from './reducer-save-to-data';
import MappingName from "./reducer-mapping-name";
import DocumentClassList from "./reducer-document-class-list";
import DocumentClassName from "./reducer-document-class-name-save";
import DocumentClassFields from "./reducer-store-document-class-fields";
import TriggerFieldList from './reducer-trigger-field-list';
import TriggerFieldName from './reducer-trigger-field-name-save';
import SearchQuery from "./reducer-search-query-save";
import Priority from "./reducer-priority";
import ContainerCollectionList from "./reducer-container-collection-list";
import ContainerCollectionName from "./reducer-container-collection-name";
import ContainerCollectionFields from './reducer-store-container-collection-fields';
import CaseModelFields from './reducer-store-case-model-fields';
import CaseModelName from './reducer-case-model-name';
import CaseModelList from './reducer-case-model-list';
import DocAttb_WorkFieldNames from "./reducer-docAttb-workflowField-name-save";
import DocAttb_WorkFieldObj from "./reducer-docAttb-workflowField-obj-save";
import ContainerField_caseModelNames from "./reducer-bpmFields-caseModel-name-save";
import ContainerField_caseModelObj from "./reducer-bpmFields-caseModel-obj-save";
import DefaultValue_BusineesFieldNames from './reducer-default-business-field-name-save';
import DefaultValue_BusineesFieldObj from './reducer-default-business-field-obj-save';
import Flag from './reducer-edit-flag';
import Index from './reducer-set-index';


const rootReducer = combineReducers({
    ProcessListItems, //This stores the list of process name which is available from the api call in container-process-name file.
    UpdateProcessName, // This contains the list of reducers that updates processName1 and processName2.
    SaveToData, //save the object to the data array.
    MappingName, //This contains reducers to save the mapping name and get the saved mapping name.
    DocumentClassList, //Stores the document class list from the api call.
    DocumentClassName, //Stores the selected document class name in to the data json.
    DocumentClassFields, // contains the list of fields that are extracted by choosing a document class from the dropdown.
    TriggerFieldList, //Stores the trigger field list from api
    TriggerFieldName, //Stores the selected trigger field name.
    SearchQuery, //Stores search query.
    Priority, //Stores the priority
    ContainerCollectionList, //Store container collection list from api
    ContainerCollectionName,//Store selected container colleciton name
    ContainerCollectionFields, //contains the list of fields that are extracted by choosing a container case model from the dropdown.
    CaseModelList, //Store case model  list form api,
    CaseModelName, //Store case model selected name.
    CaseModelFields, // contains the list of fields that are extracted by choosing a case model from the dropdown.
    DocAttb_WorkFieldNames, //Stores user selected names of document attribute field and container field 1.
    DocAttb_WorkFieldObj, //Store the array of object of document attribut and container field1
    ContainerField_caseModelNames, //Stores user selected container field and case model names,
    ContainerField_caseModelObj, // Store the array oof object of container field 2 and case model field.
    DefaultValue_BusineesFieldNames, // stores user selected default values and container field 3. 
    DefaultValue_BusineesFieldObj, // stores the array of object of default values and container field 3.
    Flag, // Set or reset the edit flag.
    Index,// Sets the index of the edited flag
})

export default rootReducer;