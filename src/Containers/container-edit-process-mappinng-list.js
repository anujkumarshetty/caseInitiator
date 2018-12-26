import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Styles from "../CSS/styles";
import { withStyles } from "@material-ui/core";
import dash from 'lodash';

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import DispatchAction from '../Actions/action-creator';
import {
    DELETE_FROM_DATA,
    STORE_MAPPING_NAME,
    UPDATE_PROCESS_LIST1,
    STORE_DOCUMENT_CLASS,
    STORE_SEARCH_QUERY,
    STORE_DOCUMENT_CLASS_TRIGGER_LIST,
    STORE_TRIGGER_FIELD,
    STORE_PRIORITY_VALUE,
    STORE_CONTAINER_COLLECTION_NAME,
    STORE_CASE_MODEL_NAME,
    EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ,
    EDIT_BPM_TO_CASEMODEL_OBJ,
    EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ,
    SET_FLAG,
    SET_INDEX,
} from "../Actions/action-definitions";


class EditProcessList extends Component {
    editMapping(index) {
        // alert(index)
        const { DispatchAction, data, triggerList } = this.props;
        const Obj = dash.cloneDeep(data[index]);

        DispatchAction(SET_FLAG, "");
        DispatchAction(SET_INDEX, index);
        DispatchAction(STORE_MAPPING_NAME, Obj.mappingName);
        DispatchAction(UPDATE_PROCESS_LIST1, Obj.processTemplateName);
        DispatchAction(STORE_DOCUMENT_CLASS, Obj.srcDocumentClass);
        DispatchAction(STORE_DOCUMENT_CLASS_TRIGGER_LIST, triggerList)
        DispatchAction(STORE_SEARCH_QUERY, Obj.searchQuery);
        DispatchAction(STORE_TRIGGER_FIELD, Obj.triggerFieldName);
        DispatchAction(STORE_PRIORITY_VALUE, Obj.priority);
        DispatchAction(STORE_CONTAINER_COLLECTION_NAME, Obj.containerCollection);
        DispatchAction(STORE_CASE_MODEL_NAME, Obj.caseModel);
        DispatchAction(EDIT_DOC_ATTB_AND_WORK_FIELD_OBJ, Obj.containerFieldMappings);
        DispatchAction(EDIT_BPM_TO_CASEMODEL_OBJ, Obj.caseModelFieldMappings);
        DispatchAction(EDIT_DEFAULT_VALUE_FOR_BUSINESS_FIELD_OBJ, Obj.containerDefaultValues);
    }

    deleteMapping(index) {
        // alert(index)
        this.props.DispatchAction(DELETE_FROM_DATA, index);
    }

    renderPannel() {
        const { data } = this.props;
        //below map gives the list of process name that are saved in the data object.
        let processNames = data.map(item => {
            return item.processTemplateName;
        })

        //below filter, filter outs the unique values in the header array of process name, returning a unique elemented array of the process names.
        let uniqueProcessNames = processNames.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        return uniqueProcessNames.map((header, key1) => {
            return (
                <ExpansionPanel key={key1}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{header}</Typography>
                    </ExpansionPanelSummary>

                    {data.map((map, key2) => {
                        return map.processTemplateName === header ? (
                            <div key={key2}>
                                <List component="nav">
                                    <ListItem button style={{ marginTop: "-13px" }}>
                                        <ListItemText
                                            style={{ paddingLeft: "15px" }}
                                            primary={map.mappingName}
                                        />
                                        <Icon

                                            style={{ float: "right", marginRight: "20px", fontSize: "17px" }}
                                            onClick={() => this.editMapping(key2)}
                                        >
                                            border_color
                                        </Icon>
                                        <Icon
                                            color="secondary"
                                            style={{ float: "right", marginTop: "4px", marginRight: "-4px" }}
                                            onClick={() => this.deleteMapping(key2)}
                                        >
                                            delete_forever
                                         </Icon>
                                    </ListItem>
                                </List>
                            </div>
                        ) : (
                                <div key={key2} />
                            );
                    })}
                </ExpansionPanel>
            );
        });
    }

    render() {
        // console.log(this.props.data);
        const { data } = this.props;
        console.log(data);
        if (data.length === 0) {
            return <div></div>
        } else {
            return (
                <div style={{ width: "98.5%", marginLeft: "auto", marginRight: "auto",marginTop: "2%" }}>
                    {this.renderPannel()}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {

    return {
        data: state.SaveToData.data,
        triggerList: state.TriggerFieldList,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        DispatchAction
    }, dispatch)
}

export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(EditProcessList));