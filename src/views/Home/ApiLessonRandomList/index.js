import { PaperApi } from '@doc-api/components';
import React from 'react';
import json_code from './mock.json';

export default function ApiLessonRandomListView(props) {
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
                detail: `GET https://api.blackboardapp.co/api/v1/home/lesson/random/[category_id]`,
                option: {
                    method: 'GET',
                    path: `https://api.blackboardapp.co/api/v1/home/lesson/random/[category_id]`
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
                detail: "",
                table: {
                    title: "Params",
                    header: ["Key", "Description"],
                    data: [
                        {
                            key: "category_id",
                            description: `
                            ศิลปะและการออกแบบ => 101
                            การถ่ายภาพ => 102
                            เพลงและการแสดง => 103
                            กีฬาและออกกำลังกาย => 104
                            ศิลปะป้องกันตัว => 105
                            ไอทีและซอฟแวร์ => 106
                            โปรแกรมสำนักงาน => 107
                            ภาษา => 108
                            ทำอาหารและขนม => 109
                            สไตล์ลิส แต่งหน้าทำผม => 110
                            บทเรียนระดับประถม => 111
                            บทเรียนระดับมัธยมต้น => 112
                            บทเรียนระดับมัธยมปลาย => 113
                            บทเรียนระดับมหาวิทยาลัย => 114
                            การสอบวัดผลระดับต่าง ๆ => 115
                            ข้อสอบ ก.พ. ข้อสอบข้าราชการ => 116
                            พาณิชยการและการตลาด => 117
                            งานช่างและอาชีวะ => 118
                            งานฝีมือ => 119
                            การเกษตร => 120
                            จิตวิทยาและการพัฒนาตัวเอง => 121
                            ดูดวง ฮวงจุ้ย => 122
                            ธรรมะ พระไตรปิฎก => 123
                            อื่นๆ =>124
                            `
                        }, {
                            key: "Content-Type",
                            description: "application/json"
                        }, {
                            key: "platform",
                            description: "website"
                        }]
                }
            },
            requestBody: {
                title: "Request body",
                detail: "ไม่มี",
                table:  {
                    title: "Body",
                    header: ["Key", "Description"],
                    data: null
                }
            }
        }
    });
    const [response] = React.useState({
        title: "Response",
        detail:  `
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
                        key: "info_id",
                        description: "number"
                    }, {
                        key: "status",
                        description: "number"
                    }, {
                        key: "cat_id",
                        description: "number"
                    }, {
                        key: "type",
                        description: "number"
                    }, {
                        key: "link",
                        description: "string"
                    }, {
                        key: "note",
                        description: "string || null"
                    }, {
                        key: "active",
                        description: "number"
                    }, {
                        key: "duration",
                        description: "string"
                    }, {
                        key: "view",
                        description: "number"
                    }, {
                        key: "owner",
                        description: "string"
                    }, {
                        key: "cover",
                        description: "string"
                    }, {
                        key: "favorites",
                        description: "number"
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