import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiCommentRemoveView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "user", "student", "page", "lesson", "comment", "remove"])
    const [header] = React.useState({
        title: "Comment: remove",
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
                detail: `DELETE https://api.blackboardapp.co/api/v1/lesson/comment?id=[comment_id]`,
                option: {
                    method: 'DELETE',
                    path: `https://api.blackboardapp.co/api/v1/lesson/comment?id=[comment_id]`
                }
            },
            headers: {
                title: "Headers",
                detail: "ไม่มี",
                table: {
                    title: "Headers",
                    header: ["Key", "Description"],
                    data: [
                        {
                            key: "app-name",
                            description: "blackboard-th"
                        }, {
                            key: "authorization",
                            description: "Bearer [access_token]"
                        }, {
                            key: "Content-Type",
                            description: "application/json"
                        }]
                }
            },
            parameters: {
                title: "Parameters",
                detail: "",
                table: {
                    title: "Query",
                    header: ["Key", "Description"],
                    data: [
                        {
                            key: "comment_id",
                            description: `number`
                        }]
                }
            },
            requestBody: {
                title: "Request body",
                detail: "",
                table: {
                    title: "Body",
                    header: ["Key", "Description"],
                    data: null
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
                    header: ["Key", "Description"],
                    data: [{
                        key: "fieldCount",
                        description: "number"
                    }, {
                        key: "affectedRows",
                        description: "number"
                    }, {
                        key: "insertId",
                        description: "number"
                    }, {
                        key: "serverStatus",
                        description: "number"
                    }, {
                        key: "warningCount",
                        description: "number"
                    }, {
                        key: "message",
                        description: "string"
                    }, {
                        key: "protocol41",
                        description: "bool"
                    }, {
                        key: "changedRows",
                        description: "number"
                    }]
                }
            }
        }
    });
    const [errors] = React.useState({
        title: "Errors",
        detail: "",
        table: {
            header: ["Error type", "Error detail", "Description"],
            data: [{
                errorType: "",
                errorDetail: "",
                Description: ""
            }]
        }
    });


    return (
        <PaperApi header={header} common={common} request={request} response={response} errors={errors} path={pathUrl}></PaperApi>
    )
}