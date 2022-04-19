const {
  titles,
  entries,
  achievements,
  informalEducation,
  informalEdCategories,
} = require("./resumeData");

const getClassicalData = () => {
  let modifiedTitles = titles;
  // add entries to titles
  entries.forEach((entry) => {
    // a bit costly, but data is not as big. if speed is of importance, one could do create a copy with IDs, and then store it somewhere
    // let titleIndex = titles.findIndex((element) => element.id === entry.titleId);

    // actually, ID is now in order...
    let titleIndex = entry.titleId - 1;

    if (modifiedTitles[titleIndex].entries) {
      modifiedTitles[titleIndex].entries.push(entry);
    } else {
      modifiedTitles[titleIndex].entries = [entry];
    }
  });

  let subCategoriesExperience = [];
  let subCategoriesEducation = [];

  const newExperienceData = [];
  const newEducationData = [];
  titles.forEach((title) => {
    // Push data to the correct array

    const pushToArrays = (subCatArray, mainArray) => {
      if (title.subCategory) {
        //check if subCat already exists
        const subCatIndex = subCatArray.findIndex(
          (element) => element.subCatTitle === title.subCategory
        );
        //add titles to the object
        if (subCatIndex !== -1) {
          subCatArray[subCatIndex].titles.push(title);
        } else {
          subCatArray.push({
            type: "subCat",
            subCatTitle: title.subCategory,
            category: title.category,
            titles: [title],
          });
        }
      } else {
        title.type = "normal";
        mainArray.push(title);
      }
    };

    if (title.category === "Experience") {
      pushToArrays(subCategoriesExperience, newExperienceData);
    } else {
      pushToArrays(subCategoriesEducation, newEducationData);
    }
    //push the titles to combinedData.
  });

  const experienceData = [...newExperienceData, ...subCategoriesExperience];
  const educationData = [...newEducationData, ...subCategoriesEducation];
  return {
    experience: experienceData,
    education: educationData,
  };
};

const classicalDataUnsorted = getClassicalData();

const sortClassicalData = (dataArr) => {
  //get correct format
  const toDate = (date) => {
    return new Date("01/" + date);
  };

  //check for recursion
  //maybe you want to create this to findAll and then add a forEach loop
  const subCatIndex = dataArr.findIndex((item) => item.type === "subCat");
  if (subCatIndex !== -1) {
    dataArr[subCatIndex].titles = sortClassicalData(
      dataArr[subCatIndex].titles
    );
  }

  return dataArr.sort((a, b) => toDate(b.endDate) - toDate(a.endDate));
};

const classicalData = {
  experience: sortClassicalData(classicalDataUnsorted.experience),
  education: sortClassicalData(classicalDataUnsorted.education),
};

const getInformalEd = (informalEdArr, categories) => {
  let allData = categories;

  informalEdArr.forEach((item) => {
    let platformEntry = {
      platform: item.platform,
      duration: item.totalDuration,
    };
    if (item.amountVideos) {
      platformEntry.amountVideos = item.amountVideos;
    }

    const allDataIndex = allData.findIndex(
      (element) => element.category === item.category
    );

    if (!allData[allDataIndex].totalDuration) {
      allData[allDataIndex].platforms = [platformEntry];
      allData[allDataIndex].totalDuration = item.totalDuration;
    } else {
      //cat already exists
      allData[allDataIndex].platforms.push(platformEntry);
      allData[allDataIndex].totalDuration += item.totalDuration;
    }
  });

  return allData;
};

const informalEdData = getInformalEd(informalEducation, informalEdCategories);

// modernView
const getModernData = (entryArr) => {
  let labels = [];
  entryArr.forEach((entry) => {
    entry.labels.forEach((label) => {
      const labelIndex = labels.findIndex((item) => item.label === label);

      if (labelIndex === -1) {
        labels.push({
          label: label,
          count: 1,
        });
      } else {
        labels[labelIndex].count++;
      }
    });
  });

  labels.sort((a, b) => b.count - a.count);
  return labels;
};

const modernData = getModernData(entries);
// console.log(modernData);

module.exports = {
  classicalData,
  informalEdData,
};
