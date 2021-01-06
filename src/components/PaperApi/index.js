import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { CodeEdit } from '@doc-api/components'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    textDetail: {
        whiteSpace: 'pre-line'
    },
    devsiteArticle: {
        width: 950,
        padding: 40
    },
    devsiteHeader: {},
    devsiteCommon: {},
    devsiteRequest: {},
    devsiteRequestHTML: {},
    devsiteRequestHeaders: {},
    devsiteRequestParameters: {},
    devsiteRequestBody: {},
    devsiteResponse: {},
    devsiteResponseProperties: {},
    devsiteErrors: {}
}));

export default function PaperApi(props) {
    const classes = useStyles();
    const [openCopy, setOpenCopy] = React.useState(false)

    function handleCopyClose() {
        setOpenCopy(false)
    }

    function switchColor(method) {
        switch (method) {
            case "GET":
                return "green"
            case "POST":
                return "orange"
            case "PUT":
                return "blue"
            case "DELETE":
                return "red"
            default:
                break;
        }
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Paper className={classes.devsiteArticle} >
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        {props.path.map((_path, key) => (
                            <StyledBreadcrumb
                                key={key}
                                label={_path}
                            />
                        ))}
                    </Breadcrumbs>
                    <Typography variant="h3">{props.header.title}</Typography>
                    <Typography component="div">
                        <Typography component="div" className={classes.devsiteHeader}>
                            <Typography variant="subtitle1" className={classes.textDetail}>{props.header.detail}</Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteCommon}>
                            <Typography variant="h4">{props.common.title}</Typography>
                            <Typography variant="subtitle1" className={classes.textDetail}>{props.common.detail}</Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteRequest}>
                            <Typography variant="h4">{props.request.title}</Typography>
                            <Typography component="div" className={classes.devsiteRequestHTML}>
                                <Typography variant="h5">{props.request.list.HTTPrequest.title}</Typography>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                >
                                    <Grid item xs={11} style={{
                                        backgroundColor: "gainsboro"
                                    }}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="center"
                                        >
                                            <Grid item xs={1}>
                                                <div style={{
                                                    backgroundColor: switchColor(props.request.list.HTTPrequest.option.method),
                                                    width: '40px',
                                                    borderRadius: '3px',
                                                    textAlign: 'center',
                                                }}>
                                                    <Typography variant="body1" style={{
                                                        color: '#FFF',
                                                        fontWeight: 'bold',
                                                    }}>{props.request.list.HTTPrequest.option.method}</Typography>
                                                </div>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography variant="body1">{props.request.list.HTTPrequest.option.path}</Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={1}>
                                        <CopyToClipboard text={props.request.list.HTTPrequest.option.path}
                                            onCopy={() => setOpenCopy(true)}>
                                            <Button variant="outlined" size="small">Copy</Button>
                                        </CopyToClipboard>
                                    </Grid>
                                </Grid>


                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestHeaders}>
                                <Typography variant="h5">{props.request.list.headers.title}</Typography>
                                <Typography variant="body1" className={classes.textDetail}>{props.request.list.headers.detail}</Typography>
                                {props.request.list.headers.table === null ? (<React.Fragment>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left"><Typography variant="h6">{props.request.list.headers.table.title}</Typography></TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCell align="left" >{props.request.list.headers.table.header[0]}</StyledTableCell>
                                            <StyledTableCell align="left" >{props.request.list.headers.table.header[1]}</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow >
                                            {"ไม่มี"}
                                        </StyledTableRow>
                                    </TableBody>
                                </React.Fragment>) : (<React.Fragment>
                                    <TableContainer component="div">
                                        <Table aria-label="headers table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"><Typography variant="h6">{props.request.list.headers.table.title}</Typography></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <StyledTableCell align="left" >{props.request.list.headers.table.header[0]}</StyledTableCell>
                                                    <StyledTableCell align="left" >{props.request.list.headers.table.header[1]}</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {props.request.list.headers.table.data.map((_data, key) => (
                                                    <StyledTableRow key={key}>
                                                        <StyledTableCell>{_data.key}</StyledTableCell>
                                                        <StyledTableCell className={classes.textDetail}>{_data.description}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>)}
                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestParameters}>
                                <Typography variant="h5">{props.request.list.parameters.title}</Typography>
                                <Typography variant="body1" className={classes.textDetail}>{props.request.list.parameters.detail}</Typography>
                                {props.request.list.parameters.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>
                                    <TableContainer component="div">
                                        <Table aria-label="headers table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"><Typography variant="h6">{props.request.list.parameters.table.title}</Typography></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <StyledTableCell align="left" >{props.request.list.parameters.table.header[0]}</StyledTableCell>
                                                    <StyledTableCell align="left" >{props.request.list.parameters.table.header[1]}</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <React.Fragment>
                                                    {props.request.list.parameters.table.data === null ? (
                                                        <React.Fragment>
                                                            <StyledTableRow >
                                                                <StyledTableCell> {"ไม่มี"}</StyledTableCell>
                                                                <StyledTableCell> {"ไม่มี"}</StyledTableCell>
                                                            </StyledTableRow>
                                                        </React.Fragment>
                                                    ) : (
                                                            <React.Fragment>
                                                                {props.request.list.parameters.table.data.map((_data, key) => (
                                                                    <StyledTableRow key={key}>
                                                                        <StyledTableCell>{_data.key}</StyledTableCell>
                                                                        <StyledTableCell className={classes.textDetail}>{_data.description}</StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                            </React.Fragment>
                                                        )}
                                                </React.Fragment>

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>)}
                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestBody}>
                                <Typography variant="h5">{props.request.list.requestBody.title}</Typography>
                                <Typography variant="body1" className={classes.textDetail}>{props.request.list.requestBody.detail}</Typography>
                                {props.request.list.requestBody.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>
                                    <TableContainer component="div">
                                        <Table aria-label="requestBody table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"><Typography variant="h6">{props.request.list.requestBody.table.title}</Typography></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <StyledTableCell align="left" >{props.request.list.requestBody.table.header[0]}</StyledTableCell>
                                                    <StyledTableCell align="left" >{props.request.list.requestBody.table.header[1]}</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <React.Fragment>
                                                    {props.request.list.requestBody.table.data === null ? (
                                                        <React.Fragment>
                                                            <StyledTableRow >
                                                                <StyledTableCell> {"ไม่มี"}</StyledTableCell>
                                                                <StyledTableCell> {"ไม่มี"}</StyledTableCell>
                                                            </StyledTableRow>
                                                        </React.Fragment>
                                                    ) : (
                                                            <React.Fragment>
                                                                {props.request.list.requestBody.table.data.map((_data, key) => (
                                                                    <StyledTableRow key={key}>
                                                                        <StyledTableCell>{_data.key}</StyledTableCell>
                                                                        <StyledTableCell className={classes.textDetail}>{_data.description}</StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                            </React.Fragment>
                                                        )}
                                                </React.Fragment>




                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>)}
                            </Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteResponse}>
                            <Typography variant="h4">{props.response.title}</Typography>
                            <Typography variant="subtitle1" className={classes.textDetail}>{props.response.detail}</Typography>
                            {/* <Typography compnnent="code">{props.response.code}</Typography> */}
                            <CodeEdit code={props.response.code} language="json" height="40vh"></CodeEdit>
                            <Typography component="div" className={classes.devsiteRequestProperties}>
                                <Typography variant="h5">{props.response.list.properties.title}</Typography>
                                <Typography variant="body1" className={classes.textDetail}>{props.response.list.properties.detail}</Typography>
                                {props.response.list.properties.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>
                                    <TableContainer component="div">
                                        <Table aria-label="properties table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left"><Typography variant="h6">{props.response.list.properties.table.title}</Typography></TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <StyledTableCell align="left" >{props.response.list.properties.table.header[0]}</StyledTableCell>
                                                    <StyledTableCell align="left" >{props.response.list.properties.table.header[1]}</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {props.response.list.properties.table.data.map((_data, key) => (
                                                    <StyledTableRow key={key}>
                                                        <StyledTableCell>{_data.key}</StyledTableCell>
                                                        <StyledTableCell className={classes.textDetail}>{_data.description}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>)}
                            </Typography>
                        </Typography>

                        <Typography component="div" className={classes.devsiteErrors}>
                            <Typography variant="h4">{props.errors.title}</Typography>
                            <Typography variant="subtitle1" className={classes.textDetail}>{props.errors.detail}</Typography>
                            {props.errors.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>Table Show</React.Fragment>)}
                        </Typography>
                    </Typography>

                </Paper>
            </Container>
            <Snackbar open={openCopy} autoHideDuration={6000} onClose={handleCopyClose}>
                <Alert onClose={handleCopyClose} severity="success">
                    {"Copied."}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}
