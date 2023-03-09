export async function reviews() {
  return fetch('https://carpathians-db.onrender.com/api/review', {
    method: 'GET',
    headers: {
      key: 'dede23wfWSD@@$fsD3',
    },
  }).then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(response.status);
    }
    return response.json();
  });
}
