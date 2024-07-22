import React from "react";
import '../pages-css/department.css';

function Departments() {
    return (
        <>
            <h1>Departments</h1>
            <div className="display-table">
            <table>
                <tr>
                    <th>Department</th>
                    <th>Count</th>
                </tr>
                <tr>
                    <td>AIDS</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>ECE</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>AI&IOT</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td>Medical Electronic</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td>BME</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td>EEE</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>MECH</td>
                    <td>130</td>
                </tr>
                <tr>
                    <td>EIE</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>AIML</td>
                    <td>110</td>
                </tr>
                <tr>
                    <td>AICS</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>IT</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>CSE</td>
                    <td>200</td>
                </tr>
            </table>
            </div>
            <br />
        </>
    )
};

export default Departments