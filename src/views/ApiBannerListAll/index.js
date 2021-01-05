import { PaperApi } from '@doc-api/components';
import React from 'react';

export default function ApiBannerListAllView(props) {
    const [pathUrl] = React.useState(["blackboardapp.co","user","student","page","home","banner","list"])
    const [header] = React.useState({
        title: "Banner: list all",
        detail: "Returns รายการ Banner ที่ตรงกับพารามิเตอร์คำขอ API"
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
                detail: `GET https://api.blackboardapp.co/api/v1/home/banner/all`,
                option: {
                    method: 'GET',
                    path: `https://api.blackboardapp.co/api/v1/home/banner/all`
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
                        key: "id",
                        description: "number"
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