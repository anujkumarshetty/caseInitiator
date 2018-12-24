import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from '../CSS/styles'

class DropDown extends Component {

    renderList() {
        let list = [];
        // console.log(this.props.items);
        if (!this.props.items) {
            return [];
        } else {
            // console.log(this.props.items);
            this.props.items.map((item) => {
                return list.push(<MenuItem key={item} value={item}>{item}</MenuItem>)
            })
        }
        return list;
    }


    handleChange = event => {
        // console.log(event.target.value)
        this.props.selectedValue(event.target.value)
    };

    render() {
        const { classes } = this.props;
        return (
            <div >
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="dropdown-label-placeholder">
                        {this.props.label || ""}
                    </InputLabel>
                    <Select
                        value={this.props.initialValue}
                        onChange={this.handleChange}
                        input={<Input name="dropdown" id="dropdown-label-placeholder" />}
                        displayEmpty
                        name="dropdown"
                        className={classes.selectEmpty}>
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        {this.renderList(this.props)}
                    </Select>
                    <FormHelperText>{this.props.placeHolder || ""}</FormHelperText>
                </FormControl>
            </div>
        );
    }
}



export default withStyles(styles)(DropDown);
