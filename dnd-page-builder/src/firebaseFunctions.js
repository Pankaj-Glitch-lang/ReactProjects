import { db } from './firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Save Layout
export const saveLayoutToDB = async (layoutName, components) => {
  if (!layoutName) {
    throw new Error('Layout name is required');
  }
  // Even number of segments: collection/document
  await setDoc(doc(db, 'layouts', layoutName), { components });
};

// Load Layout
export const loadLayoutFromDB = async (layoutName) => {
  if (!layoutName) {
    throw new Error('Layout name is required');
  }
  const docSnap = await getDoc(doc(db, 'layouts', layoutName));
  if (docSnap.exists()) {
    return docSnap.data().components;
  }
  return [];
};
