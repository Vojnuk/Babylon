window.addEventListener('DOMContentLoaded', ()=>{

  let canvas = document.getElementById('renderCanvas');
  let engine = new BABYLON.Engine(canvas);
  let scene = new BABYLON.Scene(engine);

  let camera = new BABYLON.FreeCamera('test-camera',
                                      new BABYLON.Vector3(0, 0, 0),
                                      scene);
  let light = new BABYLON.PointLight("light",
                                      new BABYLON.Vector3(5, 5, 20),
                                      scene);
  //light.diffuse = new Baby

  engine.runRenderLoop(()=>{
    scene.render();
  });


});