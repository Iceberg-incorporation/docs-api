import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { useHistory } from 'react-router-dom';

function MinusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
        </SvgIcon>
    );
}

function PlusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
        </SvgIcon>
    );
}

function CloseSquare(props) {
    return (
        <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
        </SvgIcon>
    );
}

function TransitionComponent(props) {
    const style = useSpring({
        from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 7,
        paddingLeft: 18,
        borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
    root: {
        // height: 264,
        flexGrow: 1,
        // maxWidth: 400,
    },
});

function PostType(props) {
    return (
        <span>
            <span style={{
                fontWeight: 700,
                color: 'orange',
            }}>{"POST "}</span>
            <span>{props.text}</span>
        </span>
    )
}

function PutType(props) {
    return (
        <span>
            <span style={{
                fontWeight: 700,
                color: 'blue',
            }}>{"PUT "}</span>
            <span>{props.text}</span>
        </span>
    )
}

function DeleteType(props) {
    return (
        <span>
            <span style={{
                fontWeight: 700,
                color: 'red',
            }}>{"DELETE "}</span>
            <span>{props.text}</span>
        </span>
    )
}

function GetType(props) {
    return (
        <span>
            <span style={{
                fontWeight: 700,
                color: 'green',
            }}>{"GET "}</span>
            <span>{props.text}</span>
        </span>
    )
}

export default function CustomizedTreeView() {
    const classes = useStyles();
    const history = useHistory()
    return (
        <TreeView
            className={classes.root}
            defaultExpanded={['1']}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}
        >
            <StyledTreeItem nodeId="blackboard" label="Blackboardapp.co">
                <StyledTreeItem nodeId="auth" label="Auth">
                    <StyledTreeItem nodeId="auth-firebase" label="firebase" >
                        <StyledTreeItem nodeId="user-firebase-email" label="email" >
                            <StyledTreeItem nodeId="user-firebase-email-signup" label={(<PostType text="signup" />)} onClick={() => {
                                history.push('/auth/firebase/email/signup')
                            }} ></StyledTreeItem>
                            <StyledTreeItem nodeId="user-firebase-email-signin" label={(<PostType text="signin" />)} onClick={() => {
                                history.push('/auth/firebase/email/signin')
                            }} ></StyledTreeItem>
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="user-firebase-signin" label={(<PostType text="signin" />)} onClick={() => {
                            history.push('/auth/firebase/signin')
                        }} ></StyledTreeItem>
                    </StyledTreeItem>
                </StyledTreeItem>
                <StyledTreeItem nodeId="payment" label="Payment"></StyledTreeItem>
                <StyledTreeItem nodeId="admin" label="Admin"></StyledTreeItem>
                <StyledTreeItem nodeId="user" label="User">
                    <StyledTreeItem nodeId="user-1" label="นักเรียน" >
                        <StyledTreeItem nodeId="user-1-1" label="Home" >
                            <StyledTreeItem nodeId="user-1-1-1" label="Banner" >
                                <StyledTreeItem nodeId="user-1-1-1-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/banner/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="user-1-1-1-2" label="Shotcut">
                                <StyledTreeItem nodeId="user-1-1-1-2-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/shortcut/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="user-1-1-1-3" label="VideoFree">
                                <StyledTreeItem nodeId="user-1-1-1-3-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/video-free/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="user-1-1-1-4" label="Category">
                                <StyledTreeItem nodeId="user-1-1-1-4-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/category/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="user-1-1-1-5" label="RandomLesson">
                                <StyledTreeItem nodeId="user-1-1-1-5-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/random-lesson/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                            <StyledTreeItem nodeId="user-1-1-1-6" label="LessonByCategory">
                                <StyledTreeItem nodeId="user-1-1-1-6-1" label={(<GetType text="list" />)} onClick={() => {
                                    history.push('/user/student/home/lesson-by-category/list')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="user-1-2" label="Lesson" >
                            <StyledTreeItem nodeId="user-1-2-1" label="Comment" >
                                <StyledTreeItem nodeId="user-1-1-1-1" label={(<PostType text="create" />)} onClick={() => {
                                    history.push('/user/student/lesson/comment/create')
                                }} ></StyledTreeItem>
                                <StyledTreeItem nodeId="user-1-1-1-2" label={(<PutType text="update" />)} onClick={() => {
                                    history.push('/user/student/lesson/comment/update')
                                }} ></StyledTreeItem>
                                <StyledTreeItem nodeId="user-1-1-1-3" label={(<DeleteType text="remove" />)} onClick={() => {
                                    history.push('/user/student/lesson/comment/remove')
                                }} ></StyledTreeItem>
                            </StyledTreeItem>
                        </StyledTreeItem>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="user-2" label="ครู" >

                    </StyledTreeItem>
                </StyledTreeItem>
            </StyledTreeItem>
        </TreeView>
    );
}
