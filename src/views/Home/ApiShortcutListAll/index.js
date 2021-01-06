import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiShortcutListAllView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "user", "student", "page", "home", "shortcut", "list"])
    const [header] = React.useState({
        title: "Shortcut: list all",
        detail: "Returns รายการ Shortcut ที่ตรงกับพารามิเตอร์คำขอ API"
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
                detail: `GET https://api.blackboardapp.co/api/v1/home/shortcut/all`,
                option: {
                    method: 'GET',
                    path: `https://api.blackboardapp.co/api/v1/home/shortcut/all`
                }
            },
            headers: {
                title: "Headers",
                detail: "",
                table: {
                    title: "Headers",
                    header: ["Key", "Description"],
                    data: [
                        {
                            key: "app-name",
                            description: "blackboard-th"
                        }, {
                            key: "Content-Type",
                            description: "application/json"
                        }, {
                            key: "platform",
                            description: "website"
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
                detail: "ไม่มี",
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
                        key: "id",
                        description: "number"
                    }, {
                        key: "name",
                        description: "string"
                    }, {
                        key: "image",
                        description: "string"
                    }, {
                        key: "url",
                        description: "string"
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