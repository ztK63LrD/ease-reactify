import { useState } from "react";
import Button from "./button";
import "./index.scss";

const modules: any = {
    Button,
    ButtonView: () => <div>213</div>,
};

const Container = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="container">
            <div className="container-left">
                {Object.keys(modules).map((key, index) => {
                    return (
                        <div
                            key={key}
                            className={`menu-item ${current === index ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        >
                            {key}
                        </div>
                    );
                })}
            </div>
            <div className="container-right">
                {modules[Object.keys(modules)[current]]()}
            </div>
        </div>
    );
};

export default Container;
