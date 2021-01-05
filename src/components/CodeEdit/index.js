import React, { useState } from "react";
import { Paper, Grid } from '@material-ui/core'
import { ControlledEditor } from "@monaco-editor/react";

const BAD_WORD = "eval";
const WARNING_MESSAGE = " <- hey man, what's this?";

function CodeEdit(props) {
    const [value, setValue] = useState(props.code);

    const handleEditorChange = (ev, value) => {
        setValue(
            value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
                ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
                : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
                    ? value.replace(WARNING_MESSAGE, "")
                    : value
        );
    };

    return (
        <Paper variant="outlined">
            <Paper variant="outlined" square>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={1}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={2}> </Grid>
                            <Grid item xs={10}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={4}>
                                        <div style={{
                                            height: '10px',
                                            width: '10px',
                                            backgroundColor: '#ff000094',
                                            borderRadius: '50%',
                                            margin: 4
                                        }}></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            height: '10px',
                                            width: '10px',
                                            backgroundColor: '#ffd30080',
                                            borderRadius: '50%',
                                            margin: 4
                                        }}></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{
                                            height: '10px',
                                            width: '10px',
                                            backgroundColor: '#00800094',
                                            borderRadius: '50%',
                                            margin: 4
                                        }}></div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={4}></Grid> */}
                    </Grid>
                    <Grid item xs={11}></Grid>
                </Grid>
            </Paper>
            <ControlledEditor
                options={{
                    minimap: {
                        enabled: false,
                    },
                    // fontSize: 18,
                    // cursorStyle: "block",
                    // wordWrap: "on",
                    // formatOnPaste: true,
                    // formatOnType: true,
                }}
                height={props.height}
                value={value}
                onChange={handleEditorChange}
                language={props.language}
            />
        </Paper>
    )
}

export default CodeEdit;