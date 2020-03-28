import React from "react";


export default () => (
    <form className="mt-16 text-center">
        <label for="contact-content" className="block text-gray-200 text-sm font-light mb-2">Cuentame cual es tu proximo projecto...</label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea
                id="contact-content"
                name="contact-content"
                className="flex-1 py-1 px-3 text-gray-800 focus:outline-none focus:shadow-outline">
            </textarea>
            <button class="btn ml-3">Enviar</button>
        </div>
    </form>
);