"use client";

import * as THREE from 'three';
import { createRoot } from 'react-dom/client'
import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import dynamic from 'next/dynamic';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { Rhino3dmLoader } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function page() {
  const path = "./../../public/testmodel/source/Dayo.glb";
  let obj =null;
  try {
     useLoader(GLTFLoader, path);
  }
  catch (err) {
    console.log(err);
  }

  // const obj = useMemo(() => new OBJLoader().parse(T.decodeText(buffer)), [buffer])
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-blue-600">
    {/* <SideBar/> */}
      <div className="flex flex-col bg-gray-500" >
        {/* <Header/> */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-4 lg:py-4 lg:px-6 ">
          <div className="w-full h-full flex flex-col gap-4 bg-sky-100">
          </div>

          <div className="w-full h-full flex flex-col gap-4 bg-red-100">
          </div>
        </main>  
      </div>
      <div className="flex flex-col bg-gray-500" >
        <Canvas>
          <directionalLight position={[0,0,2]}/>
          <OrbitControls/>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="white" />

          </mesh>
        </Canvas>
        
      </div>


    </div>

  )

}
