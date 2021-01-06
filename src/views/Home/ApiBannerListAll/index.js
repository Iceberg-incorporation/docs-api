import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiBannerListAllView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co", "user", "student", "page", "home", "banner", "list"])
    const [header] = React.useState({
        title: "Banner: list all",
        detail: "Returns รายการ Banner ที่ตรงกับพารามิเตอร์คำขอ API"
    });
    const [common] = React.useState({
        title: "Common use cases",
        detail: "รออัพเดตละเอียด Common use cases"
    });
    const [request] = React.useState({
        title: "Request",
        list: {
            HTTPrequest: {
                title: "HTTP request",
                detail: `GET https://api.blackboardapp.co/api/v1/home/banner/all`,
                option: {
                    method: 'GET',
                    path: `https://api.blackboardapp.co/api/v1/home/banner/all`
                }
            },
            headers: {
                title: "Headers",
                detail: "รออัพเดตละเอียด ",
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
                detail: "รออัพเดตละเอียด Parameters",
                table: {
                    title: "ไม่มีกำหนด",
                    header: ["Key","Type", "Description"],
                    data:null
                }
            },
            requestBody: {
                title: "Request body",
                detail: "รออัพเดตละเอียด Request body",
                table: {
                    title: "ไม่มีกำหนด",
                    header: ["Key","Type", "Description"],
                    data:null
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
                detail: "รออัพเดตละเอียด Properties",
                table: {
                    title: "Properties",
                    header: ["Key","Type", "Description"],
                    data: [{
                        key: "id",
                        type: "number",
                        description: "รออัพเดตละเอียด"
                    }, {
                        key: "url",
                        type: "string",
                        description: "รออัพเดตละเอียด"
                    }]
                }
            }
        }
    });
    const [errors] = React.useState({
        title: "Errors",
        detail: "รออัพเดตละเอียด Errors",
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