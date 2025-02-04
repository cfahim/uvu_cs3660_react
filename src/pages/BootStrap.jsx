import React from "react";
import MainLayout from "./layouts/MainLayout";

const BootStrap = () => {
    return (
        <MainLayout title="BootStrap | MyPage">
            <h2>Bootstrap Grid System</h2>
            <p>Bootstrap grid system is responsive and mobile-first. It is used to create a responsive layout.</p>
            <p>The Bootstrap grid system has four classes:</p>
            <ul>
                <li>.col-sm-</li>
                <li>.col-md-</li>
                <li>.col-lg-</li>
                <li>.col-xl-</li>
                <li>.col-xxl-</li>
            </ul>
            <p>The classes can be combined to create more dynamic and flexible layouts.</p>
            
            <div className="container">
                <div className="row">
                    <div className="col bg-danger text-white">Column 1 (100%)</div>                    
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-1 bg-primary text-white">Column 1 (1/12)</div>
                    <div className="col-2 bg-secondary text-white">Column 2 (2/12)</div>
                    <div className="col-3 bg-primary text-white">Column 3 (3/12)</div>
                    <div className="col-6 bg-secondary text-white">Column 4 (6/12)</div>
                </div>
            </div>

            <p>container-fluid</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 bg-primary text-white">Column 1 (50%)</div>
                    <div className="col-6 bg-secondary text-white">Column 2 (50%)</div>
                </div>
            </div>

            <p>Different column sizes based off screen size</p>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 bg-primary text-white">Column 1</div>
                    <div className="col-12 col-md-6 col-lg-4 bg-secondary text-white">Column 2</div>
                    <div className="col-12 col-md-6 col-lg-4 bg-success text-white">Column 3</div>
                </div>
            </div>

            <p>If no size provided, bootstrap will try to make them equal</p>
            <div className="container">
                <div className="row">
                    <div className="col bg-primary text-white">Column 1</div>
                    <div className="col bg-secondary text-white">Column 2</div>
                    <div className="col bg-success text-white">Column 3</div>
                </div>
            </div>

            <p>Offsetting Columns</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 bg-primary text-white">Centered Column</div>
                </div>
            </div>
            <p>Offsetting Gets weird</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-5 bg-primary text-white">Centered Column</div>
                </div>
            </div>

            <p>Nested Columns</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 bg-primary text-white">
                        Parent Column
                        <div className="row">
                            <div className="col-6 bg-secondary">Nested Column 1</div>
                            <div className="col-6 bg-success">Nested Column 2</div>
                        </div>
                        <div className="row">
                            <div className="col-6 bg-success">Nested Column 3</div>
                            <div className="col-6 bg-secondary">Nested Column 4</div>
                        </div>
                    </div>
                    <div className="col-md-6 bg-secondary text-white">Sibling Column</div>
                </div>
            </div>

            <p>Ordering Columns</p>
            <div className="container">
                <div className="row">
                    <div className="col bg-primary text-white order-2">Column 1</div>
                    <div className="col bg-secondary text-white order-1">Column 2</div>
                </div>
            </div>

            <p>Justifying Columns</p>
            <div className="container">
                {/* all content (cols) pushed to the left */}
                <div className="row justify-content-start">
                    <div className="col-6 bg-primary text-white">Column 1</div>
                    <div className="col-4 bg-secondary text-white">Column 2</div>
                </div>
                {/* all cols are centered in row  */}
                <div className="row justify-content-center">
                    <div className="col-4 bg-primary text-white">Column 1</div>
                    <div className="col-6 bg-secondary text-white">Column 2</div>
                </div>
                {/* all content (cols) pushed to the right */}
                <div className="row justify-content-end">
                    <div className="col-4 bg-primary text-white">Column 1</div>
                    <div className="col-4 bg-secondary text-white">Column 2</div>
                </div>
                {/* space is divided equally between all cols */}
                <div className="row justify-content-around">
                    <div className="col-4 bg-primary text-white">Column 1</div>
                    <div className="col-4 bg-secondary text-white">Column 2</div>
                </div>
                {/* space is divided equally between inner cols */}
                <div className="row justify-content-between">
                    <div className="col-1 bg-primary text-white">Column 1</div>
                    <div className="col-3 bg-primary text-white">Column 2</div>
                    <div className="col-1 bg-primary text-white">Column 3</div>
                    <div className="col-4 bg-secondary text-white">Column 4</div>
                </div>
            </div>

            <p>Equal Height</p>     
            <div className="container" style={{ height: "300px", border: "2px solid black" }}>
                <div className="row h-100">
                    <div className="col bg-primary text-white">Full Height</div>
                    <div className="col bg-secondary text-white">Full Height</div>
                </div>
            </div>

            <p>Cols take only the space they need</p>
            <div class="container">
                <div class="row row-cols-auto">
                    <div class="col bg-primary text-white p-3">Short</div>
                    <div class="col bg-secondary text-white p-3">Medium content</div>
                    <div class="col bg-success text-white p-3">Much longer text in this column</div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-6 bg-primary text-white p-3">Short Content</div>
                    <div class="col-auto offset-md-2 bg-secondary text-white p-3">Much Longer Content Here</div>
                </div>
            </div>

        </MainLayout>
    );
};

export default BootStrap;
