import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

import DropDown from '../Components/component-dropdown';
import TextInput from '../Components/component-textInput';
import DispatchActions from '../Actions/action-creator';
import { STORE_SEARCH_QUERY } from '../Actions/action-definitions';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class QueryBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            operatorArray: ['=', '!=', '>', '<', 'LIKE', 'NOT LIKE', 'IS NULL', 'IS NOT NULL', '>=', '<=', 'IN'],
            logicalOperataors: ['', 'AND', 'OR'],
            triggerField: "",
            symbolOperator: "",
            value: "",
            andOr: "",
            query: "",

        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAdd = () => {
        let { triggerField, symbolOperator, value, andOr } = this.state;
        if (this.props.query === "") {
            let Query = `@${triggerField}[${symbolOperator}](${value})`
            this.props.DispatchActions(STORE_SEARCH_QUERY, Query);
        } else {
            let newQuery = `${andOr}@${triggerField}[${symbolOperator}](${value})`;
            this.props.DispatchActions(STORE_SEARCH_QUERY, this.props.query + newQuery);
        }
    }
    handleClearQuery = () => {
        this.props.DispatchActions(STORE_SEARCH_QUERY, "");
    }
    changeQueryValue = (event) => {
        console.log(event)
        this.props.DispatchActions(STORE_SEARCH_QUERY, event.target.value);
    }

    handleOpenBracket = () => {
        this.props.DispatchActions(STORE_SEARCH_QUERY, this.props.query + '(');

    }
    handleCloseBracket = () => {
        this.props.DispatchActions(STORE_SEARCH_QUERY, this.props.query + ')');

    }
    render() {
        const { classes } = this.props;
        // console.log(this.state);
        return (
            <div>
                <Button  variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Query Builder
                    </Button>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Query Builder
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                Done
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>

                        <Grid container spacing={24}>
                            <Grid item xs={2}>
                                <DropDown label="Field" initialValue={this.state.triggerField} items={this.props.triggerList} selectedValue={(value) => this.setState({ triggerField: value })} />
                            </Grid>
                            <Grid item xs={2}>
                                <DropDown label="Operator" initialValue={this.state.symbolOperator} items={this.state.operatorArray} selectedValue={(value) => this.setState({ symbolOperator: value })} />
                            </Grid>
                            <Grid item xs={3} style={{ paddingLeft: "10px", marginTop: "-8px" }}>
                                <TextInput
                                    initialValue={this.state.value}
                                    label="Value"
                                    inputName={(value) => { this.setState({ value }) }}
                                />
                            </Grid>
                            <Grid item xs={2} style={{ marginLeft: "-30px" }}>
                                <DropDown initialValue={this.state.andOr} label={"Logical Operator"} items={this.state.logicalOperataors} selectedValue={(value) => this.setState({ andOr: value })} />
                            </Grid>
                            <Grid item xs={2}>
                                <Button style={{ marginLeft: "100px", marginTop: "20px" }} variant="outlined" color="primary" onClick={this.handleAdd}>
                                    Add
                                </Button>

                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={2}>
                                <Button style={{ marginLeft: "200px", marginTop: "20px", fontSize: "20px" }} variant="fab" onClick={this.handleOpenBracket}>
                                    (
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button style={{ marginLeft: "200px", marginTop: "20px", fontSize: "20px" }} variant="fab" onClick={this.handleCloseBracket}>
                                    )
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={10}>

                                <TextField
                                    id="outlined-full-width"
                                    label="Query"
                                    style={{ marginTop: "35px", width: "550px" }}
                                    placeholder="Ex: @ApplicationNumber[=](AP201805093)"
                                    multiline
                                    rowsMax="10"
                                    
                                    onChange={this.changeQueryValue}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                    value={this.props.query}

                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button style={{ marginTop: '42px', marginLeft: "-14px" }} variant="outlined" color="secondary" onClick={this.handleClearQuery}>
                                    Clear
                                </Button>
                            </Grid>
                        </Grid>

                    </div>


                </Dialog>
            </div>
        );
    }
}

QueryBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        triggerList: state.TriggerFieldList,
        query: state.SearchQuery.searchQuery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        DispatchActions
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QueryBuilder));