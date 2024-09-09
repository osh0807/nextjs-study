import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  
  return new Promise((resolve, reject) => {
    const loader = new Rhino3dmLoader;

    loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/' );

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}