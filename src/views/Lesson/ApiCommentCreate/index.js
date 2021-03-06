import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiCommentCreateView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "user", "student", "page", "lesson", "comment", "create"])
    const [header] = React.useState({
        title: "Comment: create",
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
                detail: `POST https://api.blackboardapp.co/api/v1/lesson/comment`,
                option: {
                    method: 'POST',
                    path: `https://api.blackboardapp.co/api/v1/lesson/comment`
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
                    header: ["Key", "Description"],
                    data: [
                        {
                            key: "lesson_id",
                            description: "number"
                        }, {
                            key: "rate",
                            description: "string | number "
                        }, {
                            key: "comment",
                            description: "string"
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
                    header: ["Key", "Description"],
                    data: [{
                        key: "id",
                        description: "number"
                    }, {
                        key: "lesson_id",
                        description: "number"
                    }, {
                        key: "rate",
                        description: "number | string"
                    }, {
                        key: "comment",
                        description: "string"
                    }, {
                        key: "user_id",
                        description: "number"
                    }, {
                        key: "user_name",
                        description: "string"
                    }, {
                        key: "user_pic",
                        description: "string"
                    }, {
                        key: "created_at",
                        description: "Date"
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