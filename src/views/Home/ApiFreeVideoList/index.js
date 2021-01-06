import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiFreeVideoListView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "user", "student", "page", "home", "video_free", "list"])
    const [header] = React.useState({
        title: "VideoFree: list",
        detail: "Returns รายการ VideoFree ที่ตรงกับพารามิเตอร์คำขอ API"
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
                detail: `GET https://api.blackboardapp.co/api/v1/home/free/video/all`,
                option: {
                    method: 'GET',
                    path: `https://api.blackboardapp.co/api/v1/home/free/video/all`
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
                    header: ["Key","Type", "Description"],
                    data: null
                }
            },
            requestBody: {
                title: "Request body",
                detail: "ไม่มี",
                table: {
                    title: "Body",
                    header: ["Key","Type", "Description"],
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
                    header: ["Key","Type", "Description"],
                    data: [{
                        key: "id",
                        type: "number",
                        description: "รออัพเดต"
                    }, {
                        key: "name",
                        type: "string",
                        description: "รออัพเดต"
                    }, {
                        key: "image",
                        type: "string",
                        description: "รออัพเดต"
                    }, {
                        key: "url",
                        type: "string",
                        description: "รออัพเดต"
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