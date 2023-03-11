export const fetchImages = (query, page) => {
    const API_KEY = '33084667-f5fdd61fd2318acf30785d2ee'
    return fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(new Error('error'))
        })
}

