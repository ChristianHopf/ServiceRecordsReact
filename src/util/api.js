export const fetchRecords = async () => {
  try {
    const response = await fetch("http://localhost:5041/Records");
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.error("Error: ", err);
    throw err;
  }
};
