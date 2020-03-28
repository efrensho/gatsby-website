import React from "react";
import illustration from '../imgs/undraw_master_plan_95wa.svg';
import Form from "./contact.form"

export default () => (
    <header className='bg-blue-700'>
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-5xl text-white">¡Hey! Soy Efrén</h1>
                    <p className="font-light text-xl text-white">Me gusta crear aplicaciones web y móviles</p>
                </div>
                <img src={illustration} alt='Man watching a plan of the universe' style={{ height: "300px" }}></img>
            </div>

            <div>
                <Form />
            </div>
        </div>
    </header>
)