const getLocation = (campusId, campuses) => {
  console.log(campusId, campuses);
  const matched = campuses.filter(campus => campus.id === Number(campusId));
  return matched[0].location;
};

export default getLocation;
