
import { Permissions } from 'expo';


async function enableCameraRoll() {
  const permission =  await Permissions.getAsync(Permissions.CAMERA_ROLL);
  if (permission.status !== 'granted') {
    const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (newPermission.status === 'granted') {
      alert('Camera access granted')
    }
  }
}
