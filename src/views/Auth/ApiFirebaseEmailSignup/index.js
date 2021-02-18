import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiFirebaseEmailSignupView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "auth", "firebase", "email", "signup"])
    const [header] = React.useState({
        title: "Sign Up",
        detail: "Returns รายการ Comment ที่ตรงกับพารามิเตอร์คำขอ API"
    });
    const [common] = React.useState({
        title: "Common use cases",
        detail: "รออัพเดต"
    });
    const [request] = React.useState({
        title: "Request",
        list: {
            HTTPrequest: {
                title: "HTTP request",
                detail: `POST https://api.blackboardapp.co/api/auth/blackbaord/firebase/email/signup`,
                option: {
                    method: 'POST',
                    path: `https://api.blackboardapp.co/api/auth/blackbaord/firebase/email/signup`
                }
            },
            headers: {
                title: "Headers",
                detail: "ไม่มี",
                table: {
                    title: "Headers",
                    header: ["Key", "Description"],
                    data: [{
                        key: "Content-Type",
                        description: "application/json"
                    }]
                }
            },
            parameters: {
                title: "Parameters",
                detail: "ไม่มี",
                table: {
                    title: "Parameters",
                    header: ["Key", "Description"],
                    data: null
                }
            },
            requestBody: {
                title: "Request body",
                detail: "",
                table: {
                    title: "Body",
                    header: ["Key", "Type", "Description"],
                    data: [
                        {
                            key: "displayName",
                            type: "string",
                            description: ""
                        },
                        {
                            key: "email",
                            type: "string",
                            description: ""
                        },
                        {
                            key: "phoneNumber",
                            type: "string",
                            description: ""
                        },
                        {
                            key: "password",
                            type: "string",
                            description: ""
                        },
                        {
                            key: "passwordConf",
                            type: "string",
                            description: ""
                        }]
                }
            }
        }
    });
    const [response] = React.useState({
        title: "Response",
        detail: `
        จัดรูปแบบ code
        On Windows Shift + Alt + F.
        On Mac Shift + Option + F.
        On Linux Ctrl + Shift + I.`,
        code: `${JSON.stringify(json_code)}`,
        list: {
            properties: {
                title: "Properties",
                detail: "",
                table: {
                    title: "Properties",
                    header: ["Key", "Type", "Description"],
                    data: [{
                        key: "success",
                        type: "bool",
                        description: ""
                    }, {
                        key: "statusCode",
                        type: "number",
                        description: ""
                    }, {
                        key: "message",
                        type: "string"
                    }, {
                        key: "uid",
                        type: "string",
                        description: ""
                    }, {
                        key: "access_token",
                        type: "string",
                        description: ""
                    }, {
                        key: "emailVerified",
                        type: "bool",
                        description: ""
                    }, {
                        key: "metadata",
                        type: "object",
                        description: ""
                    }, {
                        key: "data",
                        type: "array",
                        description: ""
                    }, {
                        key: "providerData",
                        type: "array",
                        description: ""
                    },
                        //  {
                        //     key: "data[0].user_id",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].firebase_id",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].phone_id",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].displayName",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].email",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].photoURL",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].phoneNumber",
                        //     type: "string",
                        //     description: ""
                        // },{
                        //     key: "data[0].providerId",
                        //     type: "string",
                        //     description: ""
                        // }
                    ]
                }
            }
        }
    });
    const [errors] = React.useState({
        title: "Errors",
        detail: "",
        table: {
            header: ["Key", "Type", "Description"],
            data: [{
                key: "success",
                type: "bool",
                description: "true|false"
            },
            {
                key: "statusCode",
                type: "number",
                description: "201|400|401|500"
            },
            {
                key: "message",
                type: "string",
                description: "กำลังอัพเดต"
            },
            {
                key: "error",
                type: "string",
                description: "กำลังอัพเดต"
            }]
        }
    });


    return (
        <PaperApi header={header} common={common} request={request} response={response} errors={errors} path={pathUrl}></PaperApi>
    )
}