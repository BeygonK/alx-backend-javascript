import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    result.photo = await uploadPhoto();
  } catch (error) {
    console.error('Failed to upload photo:', error);
  }

  try {
    result.user = await createUser();
  } catch (error) {
    console.error('Failed to create user:', error);
  }

  return result;
}
