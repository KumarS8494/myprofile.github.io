import React from 'react'
import Card from './Card'
import Wdata from "./Wdata"
export const Work = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> My Work </h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Wdata.map((val, ind) => {
                                        return <Card
                                            key={ind}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;
