// firebase/services.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Adjust path based on your project structure

export const fetchServices = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'services'));
    const servicesData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return servicesData;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        const clientsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        return clientsList
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

export const fetchProjects = async() => {
  try {
    const projectsCollectionRef = collection(db, "projects");
    const querySnapshot = await getDocs(projectsCollectionRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}      

export async function fetchImages() {
  try {
    const imagesCollectionRef = collection(db, "images");
    const querySnapshot = await getDocs(imagesCollectionRef);

    const images = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export const fetchBrands = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'topbrands'));
        const BrandList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        return BrandList
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };