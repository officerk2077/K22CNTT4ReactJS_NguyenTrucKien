import axios from 'axios';
export default axios.create({
    baseURL: "https://667125e1e083e62ee43a43ba.mockapi.io/ntkApi/ntkv1/"
})

// export async function NtkDelete(ntkId) {
//     await axios.delete(`https://667125e1e083e62ee43a43ba.mockapi.io/ntkApi/ntkv1/NtkCategory/${ntkId}`)
// }