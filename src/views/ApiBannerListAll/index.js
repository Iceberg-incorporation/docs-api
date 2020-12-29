import { PaperApi } from '@doc-api/components';
import React from 'react';

export default function ApiBannerListAllView(props) {
    const [header] = React.useState({
        title: "Banner: list all",
        detail: "Returns รายการ Banner ที่ตรงกับพารามิเตอร์คำขอ API"
    });
    const [common] = React.useState({
        title: "Common use cases",
        detail: ""
    });
    const [request] = React.useState({
        title: "Request",
        list: {
            HTTPrequest: {
                title: "HTTP request",
                detail: `GET /api/v1/home/banner/all`,
                option: {
                    method: 'GET',
                    path: `/api/v1/home/banner/all`
                }
            },
            headers: {
                title: "Headers",
                detail: "",
                table: {
                    title: "Headers",
                    header: ["Key", "Description"],
                    data: [{
                        key: "authorization",
                        description: ""
                    }, {
                        key: "app-name",
                        description: ""
                    }]
                }
            },
            parameters: {
                title: "Parameters",
                detail: "ไม่มี",
                table: null
            },
            requestBody: {
                title: "Request body",
                detail: "",
                table: null
            }
        }
    });
    const [response] = React.useState({
        title: "Response",
        detail: "",
        code: `
        {
            "success": true,
            "statusCode": 200,
            "message": "เรียกข้อมูลสำเร็จ",
            "data": [
                {
                    "id": 4,
                    "url": "https://app.blackboard-th.com/storage/banners/banner_75W_1596007408.jpeg"
                },
                {
                    "id": 5,
                    "url": "https://app.blackboard-th.com/storage/banners/banner_CkI_1596007426.jpeg"
                },
                {
                    "id": 6,
                    "url": "https://app.blackboard-th.com/storage/banners/banner_QOJ_1596007435.jpeg"
                }
            ]
        }`,
        list: {
            properties: {
                title: "Properties",
                detail: "",
                table: {
                    title: "Properties",
                    header: ["Key", "Description"],
                    data: [{
                        "id": "",
                        "url": ""
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
        <PaperApi header={header} common={common} request={request} response={response} errors={errors}></PaperApi>
    )
}