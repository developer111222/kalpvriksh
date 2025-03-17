import React from 'react';
import './academicblock.css'

const AcademicBlock = () => {
    return (
        <div class="academicBlock">
            <div class="photo">
                <img src="images/academic-block.png" alt="" />
            </div>
            <div class="text">
                <span class="topshape"></span>
                <span class="rightshape"></span>
                <span class="leftshape"></span>
                <div class="inText">
                    <h2>Academic Block </h2>
                    <p>Kalpvriksh boasts sunlit, ergonomically designed classrooms and climate-controlled learning spaces that blend aesthetics with functionality. Each room has interactive smart boards, 3D learning modules, high-definition projection systems, and adaptive seating to cater to collaborative and independent study styles.
                    </p>

                    <p>From virtual reality simulations and global expert webinars to hands-on experiments and AI-driven tutorials, the boundaries of traditional education dissolve here. Our tech-integrated spaces transform abstract concepts into tangible experiences, allowing students to journey from microscopic cells to distant galaxies—all within dynamic, immersive classrooms. </p>
                    <p>Every corner is crafted to ignite curiosity, foster innovation, and bridge the gap between local knowledge and global perspectives.</p>
                </div>
            </div>
        </div>
    )
}

export default AcademicBlock
