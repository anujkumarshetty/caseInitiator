import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';

import DispatchAction from '../Actions/action-creator';
import DropDown from '../Components/component-dropdown';
import TextInput from '../Components/component-textInput';
import QueryBuilder from '../Containers/container-query-builder';
import {
    STORE_PROCESS_LIST,
    UPDATE_PROCESS_LIST1,
    STORE_MAPPING_NAME,
    STORE_DOCUMENT_CLASS,
    STORE_DOCUMENT_CLASS_LIST,
    STORE_DOCUMENT_CLASS_FIELDS,
    STORE_DOCUMENT_CLASS_TRIGGER_LIST,
    STORE_TRIGGER_FIELD,
    STORE_SEARCH_QUERY,
    STORE_PRIORITY_VALUE,
    STORE_CONTAINER_COLLECTION_LIST,
    STORE_CONTAINER_COLLECTION_NAME,
    STORE_CONTAINER_COLLECTION_FIELDS,
    STORE_CASE_MODEL_LIST,
    STORE_CASE_MODEL_NAME,
    STORE_CASE_MODEL_FIELDS,
} from '../Actions/action-definitions';
import {
    processName,
    connectData,
    connectUrl,
    documentClass,
    containerCollection,
    caseModels
} from "../Models/api";


class caseInitiator extends Component {

    componentDidMount() {

        //Connect to BPM and Get Process List from BPM
        fetch(connectUrl, {
            method: 'POST',
            body: JSON.stringify(connectData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                if (response.MESSAGE === "IBM BPM Service Connected for admin") {
                    console.log('Success:', JSON.stringify(response));

                    fetch(processName)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                console.log(result);
                                this.props.DispatchAction(STORE_PROCESS_LIST, result);
                            },
                            (error) => {
                                console.log(error);
                            }
                        )
                } else {
                    alert('Error:', JSON.stringify(response));
                }
            }
            )
            .catch(error => console.error('Error:', error));

        //Document class list    
        fetch(documentClass)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    this.props.DispatchAction(STORE_DOCUMENT_CLASS_LIST, result);
                },
                (error) => {
                    console.log(error);
                }
            )

        //Container Collection
        fetch(containerCollection)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    this.props.DispatchAction(STORE_CONTAINER_COLLECTION_LIST, result);
                },
                (error) => {
                    console.log(error);
                }
            )

        //Case model
        fetch(caseModels)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    this.props.DispatchAction(STORE_CASE_MODEL_LIST, result);
                },
                (error) => {
                    console.log(error);
                }
            )

    }

    selectedProcessName1(value) {
        // console.log(value);
        this.props.DispatchAction(UPDATE_PROCESS_LIST1, value);
    }

    UpdateMappingValue(value) {
        console.log(value)
        this.props.DispatchAction(STORE_MAPPING_NAME, value)
    }

    UpdateProcessTemplateValue(value) {
        console.log(value);
    }

    selectedDocumentName(value) {
        // console.log(value);
        this.props.DispatchAction(STORE_DOCUMENT_CLASS, value);

        //collect the list of document attribute fields in an array for feature mapping.
        let fields = this.props.documentList[value].map((model) => {
            return model.field;
        })
        this.props.DispatchAction(STORE_DOCUMENT_CLASS_FIELDS, fields);

        //collect the list of trigger fields in an array for feature mapping.
        let triggerFields = this.props.documentList[value].map((model) => {
            return model.triggerField;
        })
        this.props.DispatchAction(STORE_DOCUMENT_CLASS_TRIGGER_LIST, triggerFields);


    }

    selectedTriggertName(value) {
        // console.log(value);
        this.props.DispatchAction(STORE_TRIGGER_FIELD, value);
    }

    storeQueryValue(value) {
        this.props.DispatchAction(STORE_SEARCH_QUERY, value)
    }

    selectedPriorityValue(value) {
        // console.log(value);
        this.props.DispatchAction(STORE_PRIORITY_VALUE, value);
    }

    priorityItems() {
        const count = 100;
        const items = [];
        for (let i = 1; i <= count; i++) {
            items.push(String(i));
        }
        // console.log(items)
        return items;

    }

    selectedContainerCollectionName(value) {
        // console.log(value);
        this.props.DispatchAction(STORE_CONTAINER_COLLECTION_NAME, value);

        //collect the list of fields in an array for mapping.
        let fields = this.props.containerList[value].map((model) => {
            return model.containerName;
        })
        this.props.DispatchAction(STORE_CONTAINER_COLLECTION_FIELDS, fields);
    }

    selectedCaseModelName(value) {
        console.log(value);
        console.log(this.props.caseModelList)
        this.props.DispatchAction(STORE_CASE_MODEL_NAME, value);

        //collect the list of fields in an array for mapping.
        let fields = this.props.caseModelList[value].map((model) => {
            return model.field;
        })
        this.props.DispatchAction(STORE_CASE_MODEL_FIELDS, fields);
    }

    render() {

        const {
            ProcessListItems,
            ProcessName,
            mappingName,
            documentList,
            documentName,
            triggerList,
            triggerName,
            searchQuery,
            priority,
            containerList,
            containerName,
            caseModelList,
            caseModelName
        } = this.props;
        // console.log(this.props.ProcessName);

        return (
            <div>

                <div >
                    <Grid container spacing={24}>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3} >
                            <div style={{ marginTop: "7px" }}>
                                <DropDown label="Process Name" initialValue={ProcessName.processTemplateName1} items={ProcessListItems ? ProcessListItems : []} selectedValue={(value) => this.selectedProcessName1(value)} />
                            </div>
                        </Grid>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={4}>

                            <div>
                                <TextInput
                                    readOnly={this.props.readOnly ? true : false}
                                    initialValue={mappingName.mappingName}
                                    label={"Mapping Name"}
                                    inputName={(value) => { this.UpdateMappingValue(value) }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>


                <div style={{ marginTop: "-45px" }}>
                    <Grid container spacing={24}>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3} >
                            <div >
                                <TextInput
                                    readOnly={true}
                                    initialValue={ProcessName.processTemplateName1}
                                    label={"Process Template"}
                                    inputName={(value) => { this.UpdateProcessTemplateValue(value) }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={4}>
                            <div>
                                <TextInput
                                    readOnly={true}
                                    initialValue={mappingName.mappingName}
                                    label={"Mapping Name"}
                                    inputName={(value) => { this.UpdateMappingValue(value) }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div >
                    <Grid container spacing={24}>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3} >
                            <div >
                                <DropDown label="Document Class" initialValue={documentName.srcDocumentClass} placeHolder="" items={documentList ? Object.keys(documentList) : []} selectedValue={(value) => this.selectedDocumentName(value)} />
                            </div>
                        </Grid>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={4}>
                            <div >
                                <DropDown label="Trigger Field" initialValue={triggerName.triggerFieldName} placeHolder="" items={triggerList ? triggerList : []} selectedValue={(value) => this.selectedTriggertName(value)} />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div >
                    <Grid container spacing={24}>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={3} >
                            <div style={{ marginTop: "-17px" }}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={searchQuery.searchQuery}
                                    label={"Doc Search Query"}
                                    inputName={(value) => { this.storeQueryValue(value) }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={2} ></Grid>
                        <Grid item xs={4}>
                            <div >
                                <QueryBuilder />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Grid container spacing={24}>
                        <Grid item xs={4} >
                            <div>
                                <DropDown label="Priority" initialValue={priority.priority} placeHolder="" items={this.priorityItems()} selectedValue={(value) => this.selectedPriorityValue(value)} />
                            </div>
                        </Grid>
                        <Grid item xs={4} >
                            <div>
                                <DropDown label="Container Collection" initialValue={containerName.containerCollection} placeHolder="" items={containerList ? Object.keys(containerList) : []} selectedValue={(value) => this.selectedContainerCollectionName(value)} />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <DropDown label="Case Model" initialValue={caseModelName.caseModel} placeHolder="" items={caseModelList ? Object.keys(caseModelList) : []} selectedValue={(value) => this.selectedCaseModelName(value)} />
                            </div>
                        </Grid>
                    </Grid>
                </div>












            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ProcessListItems: state.ProcessListItems,//Contains the list of items of process names
        ProcessName: state.UpdateProcessName, // contains the initial and updated values of ProcessName1 and ProcessName2
        mappingName: state.MappingName,
        documentList: state.DocumentClassList,
        documentName: state.DocumentClassName,
        triggerList: state.TriggerFieldList,
        triggerName: state.TriggerFieldName,
        searchQuery: state.SearchQuery,
        priority: state.Priority,
        containerList: state.ContainerCollectionList,
        containerName: state.ContainerCollectionName,
        caseModelList: state.CaseModelList,
        caseModelName: state.CaseModelName,
        caseModelFields: state.CaseModelFields

    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        DispatchAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(caseInitiator);