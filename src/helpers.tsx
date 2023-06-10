import { UniversityData } from "./types";

const getUniversitiesData = (url: string): Promise<UniversityData[]> => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((data) => data.json())
        .then((data) => resolve(data as UniversityData[]))
        .catch((err) => {
          reject(err);
        });
    });
  };
  
  export {getUniversitiesData}