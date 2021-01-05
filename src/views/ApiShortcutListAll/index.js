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
                detail: "ไม่มี",
                table: null
            },
            parameters: {
                title: "Parameters",
                detail: "ไม่มี",
                table: null
            },
            requestBody: {
                title: "Request body",
                detail: "ไม่มี",
                table: null
            }
        }
    });
    const [response] = React.useState({
        title: "Response",
        detail: "",
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