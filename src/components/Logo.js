// Logo.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshPhysicalMaterial } from 'three';

function Model() {
  const objRef = useRef();
  const obj = useLoader(OBJLoader, '/tinker6.obj'); // Load the OBJ model

  useEffect(() => {
    if (obj) {
      const material = new MeshPhysicalMaterial({
        color: 0x3ba4dd,
        metalness: 0.1,
        roughness: 0,
        transmission: 1, // Make the material transparent
        thickness: 1, // Controls the thickness of the material
        clearcoat: 1,
        clearcoatRoughness: 0,
        reflectivity: 1,
      });

      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = material; // Apply the material to all meshes in the object
        }
      });
    }
  }, [obj]);

  useFrame(() => {
    if (objRef.current) {
      objRef.current.rotation.y += 0.03; // Rotate by 0.03 radians per frame
    }
  });

  return <primitive object={obj} scale={[0.1, 0.1, 0.09]} position={[0, 0, -23]} ref={objRef} />;
}

function Logo() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

export default Logo;
