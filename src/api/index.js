export const request = async (id) => {
  let params;
  if (id === "") {
    params = id;
  } else {
    params = "?" + new URLSearchParams({ lastSeenId: id });
  }
  const response = await fetch(`http://localhost:7070/api/news${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
