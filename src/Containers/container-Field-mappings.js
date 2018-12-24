import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';


import DropDown from "../Components/component-dropdown";
import TextInput from '../Components/component-textInput';
import Styles from '../CSS/styles';
import DispatchAction from '../Actions/action-creator';
import {
    STORE_SELECTED_DOC_ATTRIBUTE,
    STORE_SELECTED_CONTAINER_FIELD_1,
    STORE_DOC_ATTB_AND_WORK_FIELD_OBJ,
    DEL_DOC_ATTB_AND_WORK_FIELD_OBJ,
    STORE_SELECTED_CONTAINER_FIELD_2,
    STORE_SELECTED_CASE_MODEL,
    STORE_BPM_TO_CASEMODEL_OBJ,
    DEL_BPM_TO_CASEMODEL_OBJ,
    STORE_SELECTED_CONTAINER_FIELD_3,
    STORE_DEFAULT_VALUE_INPUT,
    STORE_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,
    DEL_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,
    SAVE_TO_DATA,
    RESET_FLAG,
    SAVE_EDITED_DATA,
    STORE_MAPPING_NAME,
    UPDATE_PROCESS_LIST1,
    STORE_DOCUMENT_CLASS,
    STORE_SEARCH_QUERY,
    STORE_TRIGGER_FIELD,
    STORE_PRIORITY_VALUE,
    STORE_CONTAINER_COLLECTION_NAME,
    STORE_CASE_MODEL_NAME,
    EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ,
    EDIT_BPM_TO_CASEMODEL_OBJ,
    EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,

} from '../Actions/action-definitions';

class DocClassToWorkField extends Component {


    saveProcess() {

        const {
            procesName,
            mappingName,
            documentClassName,
            searchQuery,
            triggerFieldName,
            priority,
            containerCollectionName,
            caseModelName,
            containerFieldMappings,
            caseModelFieldMappings,
            containerDefaultValues,
            DispatchAction

        } = this.props;

        function resetData() {
            // alert("reset");
            DispatchAction(STORE_MAPPING_NAME, "");
            DispatchAction(UPDATE_PROCESS_LIST1, []);
            DispatchAction(STORE_DOCUMENT_CLASS, "");
            DispatchAction(STORE_SEARCH_QUERY, "");
            DispatchAction(STORE_TRIGGER_FIELD, "");
            DispatchAction(STORE_PRIORITY_VALUE, "");
            DispatchAction(STORE_CONTAINER_COLLECTION_NAME, "");
            DispatchAction(STORE_CASE_MODEL_NAME, "");
            DispatchAction(EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ, []);
            DispatchAction(EDIT_BPM_TO_CASEMODEL_OBJ, []);
            DispatchAction(EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ, []);
        }

        if (procesName.processTemplateName1 && mappingName.mappingName) {
            alert("Data saved successfully..!");
            window.scrollTo({
                top: 100,
                left: 0,
                behavior: 'smooth'
            });
            // console.log(this.props.flag);


            let data = {
                "mappingKey": "1",
                "mappingName": mappingName.mappingName,
                "processTemplateName": procesName.processTemplateName1,
                "srcDocumentClass": documentClassName.srcDocumentClass,
                "searchQuery": searchQuery.searchQuery,
                "triggerFieldName": triggerFieldName.triggerFieldName,
                "priority": priority.priority,
                "containerCollection": containerCollectionName.containerCollection,
                "caseModel": caseModelName.caseModel,
                "containerFieldMappings": containerFieldMappings.containerFieldMappings,
                "caseModelFieldMappings": caseModelFieldMappings.caseModelFieldMappings,
                "containerDefaultValues": containerDefaultValues.containerDefaultValues
            };
            console.log(data);
            if (this.props.flag) {
                DispatchAction(SAVE_EDITED_DATA, { data: data, index: this.props.index });
                DispatchAction(RESET_FLAG, "");
                resetData();
            } else {
                DispatchAction(SAVE_TO_DATA, data);
                resetData();
            }
        } else {
            alert("Please fill the complete data and save.");
        }

    }

    submitProcess() {
        console.log(JSON.stringify(this.props.submitData.data));
        fetch('http://localhost:3000/writeJson', {
            method: 'POST',
            body: JSON.stringify(this.props.submitData.data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log("Data saved successfully");
            })
            .catch(error => console.error('Error:', error));

    }
    //First mapping
    selectedDocAttribute(value) {
        this.props.DispatchAction(STORE_SELECTED_DOC_ATTRIBUTE, value)
    }
    selectedContainerField1(value) {
        this.props.DispatchAction(STORE_SELECTED_CONTAINER_FIELD_1, value)
    }

    saveObjectDocumentClassMapping() {
        if (this.props.fieldNames_docAttbWorkFieldNames.documentAttribute && this.props.fieldNames_docAttbWorkFieldNames.containerField1) {
            this.props.DispatchAction(STORE_DOC_ATTB_AND_WORK_FIELD_OBJ, {
                documentClassAttribute: this.props.fieldNames_docAttbWorkFieldNames.documentAttribute,
                containerField: this.props.fieldNames_docAttbWorkFieldNames.containerField1
            })
        } else {
            alert("Mapping fields cannot be empty, Please select the values from the dropdown to add.");
        }

    }

    deleteObjDocumentClassMapping(index) {
        this.props.DispatchAction(DEL_DOC_ATTB_AND_WORK_FIELD_OBJ, index)
        // alert(index);
    }
    renderDocumentListToWorkflowField() {
        return (
            this.props.mappingObj_docAttbWorkField.containerFieldMappings.map((obj, key) => {
                return (
                    < li key={key}>
                        <Grid container spacing={24}>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.documentClassAttribute}
                                    inputName={(value) => { this.UpdateValue(value) }}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.containerField}
                                    inputName={(value) => { this.UpdateValue(value) }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                {/* <Button variant="outlined" className={Styles.button} onClick={() => this.deleteObjDocumentClassMapping(key)}>
                                    -
                     </Button> */}
                                <Icon className={this.props.classes.iconHoverMinus} color="secondary" style={{ fontSize: 30 }} onClick={() => this.deleteObjDocumentClassMapping(key)}>
                                    remove_circle
                                </Icon>
                            </Grid>
                        </Grid>
                    </li >
                )
            })

        )
    }

    //Second Mappings

    selectedContainerField2(value) {
        console.log(value)
        this.props.DispatchAction(STORE_SELECTED_CONTAINER_FIELD_2, value)
    }
    selectedCaseModel(value) {
        console.log(value)
        this.props.DispatchAction(STORE_SELECTED_CASE_MODEL, value)
    }

    saveObjectBPMToCaseModel() {
        if (this.props.fieldNames_contFieldCaseModel.containerField2 && this.props.fieldNames_contFieldCaseModel.caseModel) {
            this.props.DispatchAction(STORE_BPM_TO_CASEMODEL_OBJ, {
                containerField: this.props.fieldNames_contFieldCaseModel.containerField2,
                caseModelField: this.props.fieldNames_contFieldCaseModel.caseModel
            })
        } else {
            alert("Mapping fields cannot be empty, Please select the values from the dropdown to add.");
        }

    }

    deleteObjBPMToCaseModel(index) {
        this.props.DispatchAction(DEL_BPM_TO_CASEMODEL_OBJ, index)
        // alert(index);
    }
    renderListBPMToCaseModel() {
        return (
            this.props.mappingObj_contFieldCaseModel.caseModelFieldMappings.map((obj, key) => {
                return (
                    < li key={key}>
                        <Grid container spacing={24}>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.containerField}
                                    inputName={(value) => { this.UpdateValue(value) }}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.caseModelField}
                                    inputName={(value) => { this.UpdateValue(value) }}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <Icon className={this.props.classes.iconHoverMinus} color="secondary" style={{ fontSize: 30 }} onClick={() => this.deleteObjBPMToCaseModel(key)}>
                                    remove_circle
                                </Icon>
                            </Grid>
                        </Grid>
                    </li >
                )
            })

        )
    }


    //Third mapping

    selectedContainerField3(value) {
        console.log(value)
        this.props.DispatchAction(STORE_SELECTED_CONTAINER_FIELD_3, value)
    }
    inputDefaultValue(value) {
        console.log(value)
        this.props.DispatchAction(STORE_DEFAULT_VALUE_INPUT, value)
    }

    saveObjectDefaultMapping() {
        if (this.props.fieldNamesDefaultMapping.containerField3 && this.props.fieldNamesDefaultMapping.defaultValue) {
            this.props.DispatchAction(STORE_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ, {
                containerField: this.props.fieldNamesDefaultMapping.containerField3,
                defaultValue: this.props.fieldNamesDefaultMapping.defaultValue
            })
        } else {
            alert("Mapping fields cannot be empty, Please select the values from the dropdown to add.");
        }

    }

    deleteObjDefaultMapping(index) {
        this.props.DispatchAction(DEL_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ, index)
        // alert(index);
    }
    renderListDefaultMapping() {
        return (
            this.props.mappingObjDafaultMapping.containerDefaultValues.map((obj, key) => {
                return (
                    < li key={key}>
                        <Grid container spacing={24}>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.containerField}
                                    inputName={(value) => { this.UpdateValue(value) }}  //Since the text field is readOnly, we no need to worry about update value callback.
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TextInput
                                    readOnly={true}
                                    initialValue={obj.defaultValue}
                                    inputName={(value) => { this.UpdateValue(value) }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Icon className={this.props.classes.iconHoverMinus} color="secondary" style={{ fontSize: 30 }} onClick={() => this.deleteObjDefaultMapping(key)}>
                                    remove_circle
                                </Icon>
                            </Grid>
                        </Grid>
                    </li >
                )
            })

        )
    }

    render() {
        const { fieldNames_docAttbWorkFieldNames, documentClassFields, containerCollectionFields, fieldNames_contFieldCaseModel, caseModelFields, fieldNamesDefaultMapping, submitData } = this.props;

        return (

            <div>
                <br />
                <hr />
                <h6>Mapping Document Class Attributes to Workflow Field</h6>
                <hr />
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={5}>
                            <DropDown label="Document Attribute" initialValue={fieldNames_docAttbWorkFieldNames.documentAttribute} placeHolder="Varchar" items={documentClassFields} selectedValue={(value) => this.selectedDocAttribute(value)} />
                        </Grid>
                        <Grid item xs={5}>
                            <DropDown label="Container Field" initialValue={fieldNames_docAttbWorkFieldNames.containerField1} placeHolder="Varchar" items={containerCollectionFields} selectedValue={(value) => this.selectedContainerField1(value)} />
                        </Grid>
                        <Grid item xs={2}>
                            <Icon className={this.props.classes.iconHover} color="primary" style={{ fontSize: 30 }} onClick={() => this.saveObjectDocumentClassMapping()}>
                                add_circle
                                </Icon>
                        </Grid>
                    </Grid>
                    <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
                        {
                            this.renderDocumentListToWorkflowField()
                        }

                    </ul>
                </div>

                <div>
                    <hr />
                    <h6>Mapping BPM Fields to Case Model</h6>
                    <hr />
                    <Grid container spacing={24}>
                        <Grid item xs={5}>
                            <DropDown label="Container Field" initialValue={fieldNames_contFieldCaseModel.containerField2} placeHolder="Varchar" items={containerCollectionFields} selectedValue={(value) => this.selectedContainerField2(value)} />
                        </Grid>
                        <Grid item xs={5}>
                            <DropDown label="Case Model Field" initialValue={fieldNames_contFieldCaseModel.caseModel} placeHolder="Varchar" items={caseModelFields} selectedValue={(value) => this.selectedCaseModel(value)} />
                        </Grid>
                        <Grid item xs={2}>

                            <Icon className={this.props.classes.iconHover} color="primary" style={{ fontSize: 30 }} onClick={() => this.saveObjectBPMToCaseModel()}>
                                add_circle
                            </Icon>
                        </Grid>
                    </Grid>
                    <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
                        {
                            this.renderListBPMToCaseModel()
                        }

                    </ul>
                </div>

                <div>
                    <hr />
                    <h6>Mapping Default Value for Business Field</h6>
                    <hr />

                    <Grid container spacing={24}>
                        <Grid item xs={5}>
                            <DropDown label="Container Field" initialValue={fieldNamesDefaultMapping.containerField3} placeHolder="Varchar" items={containerCollectionFields} selectedValue={(value) => this.selectedContainerField3(value)} />
                        </Grid>
                        <Grid item xs={5}>
                            <TextInput
                                readOnly={this.props.readOnly ? true : false}
                                initialValue={fieldNamesDefaultMapping.defaultValue}
                                label={"Default Value"}
                                placeHolder={"Varchar"}
                                inputName={(value) => this.inputDefaultValue(value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Icon className={this.props.classes.iconHover} color="primary" style={{ fontSize: 30 }} onClick={() => this.saveObjectDefaultMapping()}>
                                add_circle
                </Icon>
                        </Grid>
                    </Grid>
                    <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
                        {
                            this.renderListDefaultMapping()
                        }
                    </ul>
                </div>
                <hr />
                <div>
                    <Button style={{ marginLeft: "47%", marginRight: "53%" }} variant="contained" color="primary" className={this.props.classes.button} onClick={() => this.saveProcess()}>
                        Save
                     </Button>
                    <Button style={{ marginLeft: "47%", marginRight: "53%" }} variant="contained" color="secondary" className={this.props.classes.button} onClick={() => this.submitProcess()}>
                        Submit
                     </Button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        fieldNames_docAttbWorkFieldNames: state.DocAttb_WorkFieldNames,
        mappingObj_docAttbWorkField: state.DocAttb_WorkFieldObj,
        documentClassFields: state.DocumentClassFields,
        containerCollectionFields: state.ContainerCollectionFields,
        fieldNames_contFieldCaseModel: state.ContainerField_caseModelNames,
        mappingObj_contFieldCaseModel: state.ContainerField_caseModelObj,
        caseModelFields: state.CaseModelFields,
        fieldNamesDefaultMapping: state.DefaultValue_BusineesFieldNames,
        mappingObjDafaultMapping: state.DefaultValue_BusineesFieldObj,

        procesName: state.UpdateProcessName,
        mappingName: state.MappingName,
        documentClassName: state.DocumentClassName,
        searchQuery: state.SearchQuery,
        triggerFieldName: state.TriggerFieldName,
        priority: state.Priority,
        containerCollectionName: state.ContainerCollectionName,
        caseModelName: state.CaseModelName,
        containerFieldMappings: state.DocAttb_WorkFieldObj,
        caseModelFieldMappings: state.ContainerField_caseModelObj,
        containerDefaultValues: state.DefaultValue_BusineesFieldObj,
        flag: state.Flag.Flag,
        index: state.Index.index,

        submitData: state.SaveToData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        DispatchAction
    }, dispatch)
}
export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(DocClassToWorkField));