import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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


    return (
        <React.Fragment>
            <CssBaseline />
            <Container >
                <Paper className={classes.devsiteArticle} >
                    <Typography variant="h3">{props.header.title}</Typography>
                    <Typography component="div">
                        <Typography component="div" className={classes.devsiteHeader}>
                            <Typography variant="subtitle1">{props.header.detail}</Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteCommon}>
                            <Typography variant="h4">{props.common.title}</Typography>
                            <Typography variant="subtitle1">{props.common.detail}</Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteRequest}>
                            <Typography variant="h4">{props.request.title}</Typography>
                            <Typography component="div" className={classes.devsiteRequestHTML}>
                                <Typography variant="h5">{props.request.list.HTTPrequest.title}</Typography>
                                <Typography variant="body1">{props.request.list.HTTPrequest.detail}</Typography>
                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestHeaders}>
                                <Typography variant="h5">{props.request.list.headers.title}</Typography>
                                <Typography variant="body1">{props.request.list.headers.detail}</Typography>
                                {props.request.list.headers.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="headers table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left">{props.request.list.headers.table.title}</TableCell>
                                                    <TableCell align="left"></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    {/* {props.request.list.headers.table.header.map((_title, key) => {
                                                        <TableCell align="left" key={key}>{_title}</TableCell>
                                                    })} */}
                                                    <TableCell align="left" >{props.request.list.headers.table.header[0]}</TableCell>
                                                    <TableCell align="left" >{props.request.list.headers.table.header[1]}</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {props.request.list.headers.table.data.map((_data, key) => (
                                                    <TableRow key={key}>
                                                        <TableCell>{_data.key}</TableCell>
                                                        <TableCell>{_data.description}</TableCell>
                                                    </TableRow>
                                                ))}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </React.Fragment>)}
                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestParameters}>
                                <Typography variant="h5">{props.request.list.parameters.title}</Typography>
                                <Typography variant="body1">{props.request.list.parameters.detail}</Typography>
                                {props.request.list.parameters.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>Table Show</React.Fragment>)}
                            </Typography>
                            <Typography component="div" className={classes.devsiteRequestBody}>
                                <Typography variant="h5">{props.request.list.requestBody.title}</Typography>
                                <Typography variant="body1">{props.request.list.requestBody.detail}</Typography>
                                {props.request.list.requestBody.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>Table Show</React.Fragment>)}
                            </Typography>
                        </Typography>
                        <Typography component="div" className={classes.devsiteResponse}>
                            <Typography variant="h4">{props.response.title}</Typography>
                            <Typography variant="subtitle1">{props.response.detail}</Typography>
                            <Typography compnnent="code">{props.response.code}</Typography>
                            <Typography component="div" className={classes.devsiteRequestProperties}>
                                <Typography variant="h5">{props.response.list.properties.title}</Typography>
                                <Typography variant="body1">{props.response.list.properties.detail}</Typography>
                                {props.response.list.properties.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>Table Show</React.Fragment>)}
                            </Typography>
                        </Typography>

                        <Typography component="div" className={classes.devsiteErrors}>
                            <Typography variant="h4">{props.errors.title}</Typography>
                            <Typography variant="subtitle1">{props.errors.detail}</Typography>
                            {props.errors.table === null ? (<React.Fragment></React.Fragment>) : (<React.Fragment>Table Show</React.Fragment>)}
                        </Typography>
                    </Typography>

                </Paper>
            </Container>
        </React.Fragment>
    );
}
