import { Card, Col, Row } from 'antd';
import React from "react";
import 'css-doodle';

export default function CardComponent(){

    return(
        <>
            <Row gutter={16} className="">
                <Col span={8}>
                    <Card  bordered={false} className='p-0'>
                        <div className=' flex flex-row items-center'>
                            <div className='rounded-full bg-amber-300 w-8 h-8 flex items-center justify-center'
                                 style={{background: '#d5e3f6'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="#1677FF" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                                </svg>
                            </div>
                            <p className="ml-4 text-base text-gray-500">Number of Departments</p>
                            <p className="ml-20 text-3xl font-semibold" >10</p>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={false} className='p-0'>
                        <div className=' flex flex-row items-center'>
                            <div className='rounded-full bg-amber-300 w-8 h-8 flex items-center justify-center'
                                 style={{background: '#e3fbd7'}}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#85D65D" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                                </svg>

                            </div>
                            <p className="ml-4 text-base text-gray-500">Number of Employees</p>
                            <p className="ml-20 text-3xl font-semibold">10</p>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={false} className='p-0'>
                        <div className=' flex flex-row items-center'>
                            <div className='rounded-full bg-amber-300 w-8 h-8 flex items-center justify-center'
                                 style={{background: '#f6d9d0'}}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="#fa5c27" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>
                                </svg>

                            </div>
                            <p className="ml-4 text-base text-gray-500">To-dos</p>
                            <p className="ml-44 text-3xl font-semibold">10</p>
                        </div>
                    </Card>
                </Col>
            </Row>


        </>
    )
}