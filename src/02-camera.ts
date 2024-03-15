import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

//enum examples:

// export declare enum CameraResultType {
//   Uri = "uri",
//   Base64 = "base64",
//   DataUrl = "dataUrl"
// }

// export declare enum CameraDirection {
//   Rear = "REAR",
//   Front = "FRONT"
// }

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front
  });
};
