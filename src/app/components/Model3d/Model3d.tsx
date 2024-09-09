import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';

function Model3d() {
  const [scene] =  useState(new THREE.Scene());
  const [camera, setCamera] = useState<any>();
  const [renderer, setRenderer] = useState<any>();


  const [loading, setLoading] = useState(false);
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [_controls, setControls] = useState<any>();

  const [initialCameraPosition] = useState(
    new THREE.Vector3(20*Math.sin(0.2*Math.PI), 10, 20*Math.cos(0.2*Math.PI))
  )

  useEffect(()=>{
    return () => {
      controls.update();
      renderer.render(scene, camera);
    }
  }, []);
  
  const rendererA = new THREE.WebGLRenderer({});
  rendererA.setPixelRatio(window.devicePixelRatio);
  rendererA.setSize(200, 200);
  setRenderer(rendererA);

  const cameraA = new THREE.PerspectiveCamera();
  cameraA.position.copy(initialCameraPosition);
  cameraA.lookAt(target);
  setCamera(cameraA);

  const ambientLight = new THREE.AmbientLight(0, 1);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target = target;
  setControls(controls);

  return (
    <div>
      {loading && <p>...loading</p>}
      
    </div>
  )
}

export default Model3d
