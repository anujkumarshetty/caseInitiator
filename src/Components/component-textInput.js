import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from "../CSS/styles";

class TextInput extends Component {

    handleChange = event => {
        // console.log(event.target.value)
        this.props.inputName(event.target.value)
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-helperText"
                        label={this.props.label}
                        value={this.props.initialValue}
                        className={classes.textField}
                        helperText={this.props.placeHolder}
                        onChange={this.handleChange}
                        margin="normal"
                        InputProps={{
                            readOnly: this.props.readOnly ? true : false,
                        }}
                    />
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(TextInput);