import React from "react"
import fireworks from '../images/night_firework002.gif'
import advection from '../images/smoke_flow003.gif'
import AwesomeSlider from "react-awesome-slider"
import AnimationStyle from 'react-awesome-slider/src/styled/scale-out-animation'
import 'react-awesome-slider/dist/styles.css'
import './Projects.css'
import bunny from '../images/5-bunny_rate.png'
import bvh from "../images/bvh2.png"
import dragon from '../images/CBdragon1.png'
import spheres from '../images/part1_CBspheres_s1024_l20_m100.png'
import walle from '../images/part4_walle_s1024_l4_m4.png'
import illumination from '../images/part4_spheres_onlyglobal_s1024_l4_m4.png'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



const IMAGES = 
[{
    original: spheres,
    thumbnail:spheres,
  },
  {
    original: dragon,
    thumbnail:dragon,
  },
    
{
  original: bunny,
  thumbnail:bunny,
},
{
    original: illumination,
    thumbnail:illumination,
  },
  
  
  {
    original: walle,
    thumbnail:walle,
  },
];

const gifs = 
[{
    original: fireworks,
    thumbnail:fireworks,
},
{
    original: advection,
    thumbnail:advection,
},


]


const Projects = () => {
    return (
        <div className='projects'>
            <div>
                <h2>Fireworks</h2>

               
                <AwesomeSlider animation="scaleOutAnimation" bullets={false}>
                    <div data-src={advection}/>
                    <div data-src={fireworks}/>
                </AwesomeSlider>

                <p> In this project I implemented the smoke physics for a firework simulation.
                    The project was made in Unity using C# and HLSL compute shaders. I referenced 
                    <a href="https://example.com/faq.html"  target="_blank"> this GPU gems article by Mark J. Harris </a>
                    in implementing the physics. A writeup for the entire project can be found 
                    <a href="https://tcdanielh.github.io/WeaponizedRomanCandles/report.html"  target="_blank"> here </a>
                    and the repository can be found 
                    <a href="https://github.com/tcdanielh/WeaponizedRomanCandles"  target="_blank"> here.</a>
                </p>
            </div>

            <div>
            <h2>Pathtracer</h2>

                <ImageGallery items={IMAGES} autoPlay={true}/>


                <p>In this project we (me and a partner) created a raytracer in C++.
                    The raytracer includes features such as a bounding volume hierarchy,
                    mirror and glass materials, and depth of field rendering.
                    Writeups for this project can be found
                    <a href="https://cal-cs184-student.github.io/sp22-project-webpages-anthony-villegas/proj3-1/index.html"  target="_blank"> here </a>
                    and
                    <a href="https://cal-cs184-student.github.io/sp22-project-webpages-anthony-villegas/proj3-2/index.html"  target="_blank"> here.</a>
                </p>

            </div>
           


        </div>
        
    )
}


export default Projects;